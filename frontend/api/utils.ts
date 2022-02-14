import { DocumentNode } from 'graphql'
import { ClientError, GraphQLClient } from 'graphql-request'
import { RefreshTokensQuery } from './queries/refresh-tokens'

const refreshTokens = async (client: GraphQLClient, cookies: {}) => {
   await client.request(RefreshTokensQuery, undefined, {
      authorization: `Bearer ${cookies['refresh-token']}`,
   })
}

export const graphqlBaseQuery =
   ({ client }: { client: GraphQLClient }) =>
   async ({
      document: query,
      variables,
   }: {
      document: string | DocumentNode
      variables?: any
   }) => {
      const cookies = Object.fromEntries(
         document.cookie.split('; ').map(c => {
            const [key, ...v] = c.split('=')
            return [key, v.join('=')]
         })
      )
      let requestHeaders = {}

      if (cookies['access-token']) {
         requestHeaders = {
            authorization: `Bearer ${cookies['access-token']}`,
         }
      }

      try {
         if (!cookies['access-token'] && cookies['refresh-token']) {
            refreshTokens(client, cookies)
         }

         const result = await client.request(query, variables, requestHeaders)
         return { data: result }
      } catch (error) {
         if (error instanceof ClientError) {
            const parsedError =
               error.response.errors[0].extensions.response ??
               error.response.errors[0].extensions.exception

            if (
               (parsedError.statusCode === 401 ||
                  parsedError.message === 'jwt expired') &&
               cookies['refresh-token']
            ) {
               refreshTokens(client, cookies)
            }

            return { error: parsedError ?? error }
         }
         return { error: { status: 500, data: error } }
      }
   }
