import { Box, Grid } from '@mui/material'
import LeftSideGrid from '../common/LeftSideGrid'



const MainLayout = ({ children, pageConstants }) => {
  return (
    <Grid
      container
      minHeight="100vh"
    >
      {/* LEFT SIDE */}
      <Grid
        size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}
      >
        <LeftSideGrid pageConstants={pageConstants} />
      </Grid>

      {/* RIGHT SIDE */}
      <Grid
        size={{ xs: 12, md: 7 }}
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
