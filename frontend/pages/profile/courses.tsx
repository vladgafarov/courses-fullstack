import UserCourses from '@components/Profile/UserCourses'
import type { NextPage } from 'next'
import Head from 'next/head'

const CoursesPage: NextPage = () => {
   return (
      <>
         <Head>
            <title>Курсы пользователя</title>
         </Head>
         <UserCourses />
      </>
   )
}

export default CoursesPage
