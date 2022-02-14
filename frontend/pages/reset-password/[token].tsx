import ResetPassword from '@components/ResetPassword'
import { NextPage } from 'next'
import Head from 'next/head'

const TokenPage: NextPage = () => {
   return (
      <>
         <Head>
            <title>Сброс пароля - новый пароль</title>
         </Head>
         <ResetPassword />
      </>
   )
}

export default TokenPage
