import { Box, Button, Stack, Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const ProductCard = ({ data }) => {
  return (
    <Box>
      {/* Eyebrow */}
      <Typography
        variant="overline"
        sx={{ color: 'text.secondary', fontWeight: 600 }}
      >
        {data.eyebrow}
      </Typography>

      {/* Title */}
      <Typography variant="h3" sx={{ mt: 1, fontWeight: 700 }}>
        {data.title}
      </Typography>

      {/* Description */}
      <Typography sx={{ mt: 2, maxWidth: 520 }}>
        {data.description}
      </Typography>

      {/* APY */}
      <Typography
        variant="h2"
        sx={{ mt: 3, fontWeight: 800, color: 'primary.main' }}
      >
        {data.apy} {data.apyNote}
      </Typography>

      {/* Feature List */}
      <Stack spacing={1.5} sx={{ mt: 3 }}>
        {data.features.map((item) => (
          <Stack key={item} direction="row" spacing={1.5} alignItems="center">
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{ color: '#2e7d32' }}
            />
            <Typography>{item}</Typography>
          </Stack>
        ))}
      </Stack>

      {/* Actions */}
      <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
        <Button variant="contained" size="large">
          Open Your Account
        </Button>
        <Button variant="outlined" size="large">
          Resume Application
        </Button>
      </Stack>

      {/* Disclosure */}
      <Button variant="text" sx={{ mt: 2, px: 0 }}>
        Account Product Disclosure &gt;&gt;
      </Button>
    </Box>
  )
}

export default ProductCard
