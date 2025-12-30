import { Box, Typography } from '@mui/material'
import ERROR from '../../assets/images/error-failure.png'

const CaseError = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        mt: 8,
        px: 2
      }}
    >
      {/* ERROR IMAGE */}
      <Box sx={{ mb: 4 }}>
        <img
          src={ERROR}
          alt="error"
          style={{ maxWidth: 260, width: '100%' }}
        />
      </Box>

      {/* GREEN HEADING */}
      <Typography
        sx={{
          fontSize: 18,
          fontWeight: 600,
          color: '#0B7A65',
          mb: 2
        }}
      >
        Thank you for reaching Bank of Hope.
      </Typography>

      {/* BLOCK TEXT */}
      <Typography
        sx={{
          maxWidth: 520,
          mx: 'auto',
          fontSize: 14,
          fontWeight: 500,
          lineHeight: 1.6,
          color: '#333'
        }}
      >
        <b>
        We are sorry and unable to process your request at this time.
        <br />
        Please contact us for further assistance at <b>1-877-275-4236</b>,
        <br />
        Monday to Friday, <b>8:30 AM to 5:30 PM</b> (Pacific Standard Time).</b>
      </Typography>
    </Box>
  )
}

export default CaseError
