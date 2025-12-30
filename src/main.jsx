import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from './globalStyles';
import { CssBaseline, ThemeProvider } from '@mui/material'

import App from './App'
import theme from './theme/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles/>
        <App />
      </ThemeProvider>
  </React.StrictMode>
)
