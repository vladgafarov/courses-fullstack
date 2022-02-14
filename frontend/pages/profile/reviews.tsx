import UserReviews from '@components/Profile/UserReviews'
import type { NextPage } from 'next'
import Head from 'next/head'

const ReviewsPage: NextPage = () => {
   return (
      <>
         <Head>
            <title>Отзывы пользователя</title>
         </Head>
         <UserReviews />
      </>
   )
}

export default ReviewsPage
