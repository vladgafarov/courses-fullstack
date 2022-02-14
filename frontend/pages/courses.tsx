import Courses from '@components/Courses/Courses'
import type { NextPage } from 'next'
import Head from 'next/head'

const CoursesPage: NextPage = () => {
   return (
      <>
         <Head>
            <title>Все курсы</title>
         </Head>
         <Courses />
      </>
   )
}

export default CoursesPage
