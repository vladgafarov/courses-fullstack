import RequestResetPassword from '@components/RequestResetPassword'
import { NextPage } from 'next'
import Head from 'next/head'

const ResetPasswordPage: NextPage = () => {
   return (
      <>
         <Head>
            <title>Сброс пароля</title>
         </Head>
         <RequestResetPassword />
      </>
   )
}

export default ResetPasswordPage
