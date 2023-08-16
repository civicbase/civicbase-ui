import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'

import App from 'components/App'
import Loader from 'components/Loader'
import GlobalStyles from 'styles/GlobalStyles'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </React.StrictMode>,
)
