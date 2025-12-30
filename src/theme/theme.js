import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: { 
    fontFamily: "'Poppins', sans-serif",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1200,
      xl: 1536
    }
  }
})

export default theme
