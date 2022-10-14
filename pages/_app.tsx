import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../assets/sass/main.scss'
import '../assets/sass/gridlayouts.scss'
import { Provider } from 'react-redux'
import store from '../src/store/store'
import { SWRConfig } from 'swr'


function MyApp({ Component, pageProps }: AppProps) {
  return <SWRConfig value={{fetcher: (resource, init) => fetch(resource, init).then(res => res.json())}}>

          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </SWRConfig>
}

export default MyApp
