import { registerEnumType } from '@nestjs/graphql'

export enum ReviewOrderBy {
   rating = 'rating',
   createdAt = 'createdAt',
}

registerEnumType(ReviewOrderBy, {
   name: 'ReviewOrderBy',
   description: 'Order by for reviews',
})
