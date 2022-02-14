import Course from '@components/Course/Course'
import type { GetServerSideProps } from 'next'
import Head from 'next/head'

const CoursePage = ({ id }) => {
   return (
      <>
         <Head>
            <title>Курс</title>
         </Head>
         <Course id={id} />
      </>
   )
}

export const getServerSideProps: GetServerSideProps = async context => {
   const { id } = context.params

   return {
      props: { id },
   }
}

export default CoursePage
