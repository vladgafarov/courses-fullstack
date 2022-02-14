import '../styles/globals.css'
import Page from '../components/Page'
import Layout from '@components/Layout/Layout'
import { Toaster } from 'react-hot-toast'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { store } from '@redux/store'

function MyApp({ Component, pageProps }) {
   return (
      <Provider store={store}>
         <ChakraProvider>
            <Page>
               <Layout>
                  <Component {...pageProps} />
                  <Toaster position="bottom-right" />
               </Layout>
            </Page>
         </ChakraProvider>
      </Provider>
   )
}

export default MyApp
