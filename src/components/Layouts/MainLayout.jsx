import { Box, Grid } from '@mui/material'

const MainLayout = ({ children }) => {
  return (
    <Grid
      container
      minHeight="100vh"
    >
      {/* LEFT SIDE — intentionally empty for now */}
      {/* 
        Future use:
        - Illustration
        - Branding
        - Progress stepper
      */}
      {/* 
      <Grid
        size={{ md: 5 }}
        sx={{
          display: { xs: 'none', md: 'flex' },
          backgroundColor: '#0f766e'
        }}
      >
        Left panel (future)
      </Grid>
      */}

      {/* RIGHT SIDE — ACTIVE NOW */}
      <Grid
        size={{ xs: 12 }}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          backgroundColor: '#fff'
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 720,
            px: { xs: 2, sm: 3, md: 4 },
            py: { xs: 3, md: 5 }
          }}
        >
          {children}
        </Box>
      </Grid>
    </Grid>
  )
}

export default MainLayout
