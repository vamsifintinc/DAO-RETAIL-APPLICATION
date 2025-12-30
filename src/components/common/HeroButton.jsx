import { Button, Stack } from '@mui/material'

const HeroButton = ({
  size = 'large',
  showDisclosure = false,
}) => {
  return (
    <>
      <Stack direction="row" spacing={2} sx={{mt: 2}}>
        <Button variant="contained" size={size}>
          Open Your Account
        </Button>

        <Button variant="outlined" size={size}>
          Resume Application
        </Button>
      </Stack>

      {showDisclosure && (
        <Button variant="text" sx={{ mt: 2, px: 0 }}>
          Account Product Disclosure &gt;&gt;
        </Button>
      )}
    </>
  )
}

export default HeroButton
