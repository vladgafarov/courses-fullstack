import Signup from '@components/Signup'
import type { NextPage } from 'next'
import Head from 'next/head'

const SignUpPage: NextPage = () => {
   return (
      <>
         <Head>
            <title>Регистрация</title>
         </Head>
         <Signup />
      </>
   )
}

export default SignUpPage
