import Login from '@components/Login'
import type { NextPage } from 'next'
import Head from 'next/head'

const LogInPage: NextPage = () => {
   return (
      <>
         <Head>
            <title>Вход</title>
         </Head>
         <Login />
      </>
   )
}

export default LogInPage
