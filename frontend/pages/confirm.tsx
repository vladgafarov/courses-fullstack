import ConfirmUser from '@components/ConfirmUser'
import type { NextPage } from 'next'
import Head from 'next/head'

const ConfirmUserPage: NextPage = () => {
   return (
      <>
         <Head>
            <title>Подтверждение регистрации</title>
         </Head>
         <ConfirmUser />
      </>
   )
}

export default ConfirmUserPage
