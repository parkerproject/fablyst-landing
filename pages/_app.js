import { StaticKitProvider } from '@statickit/react'

import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return(
    <StaticKitProvider site="46e344beee19">
       <Component {...pageProps} />
    </StaticKitProvider>
  )
  
}

export default MyApp
