import Profile from '@components/Profile/Profile'
import type { NextPage } from 'next'
import Head from 'next/head'

const ProfilePage: NextPage = () => {
   return (
      <>
         <Head>
            <title>Профиль</title>
         </Head>
         <Profile />
      </>
   )
}

export default ProfilePage
