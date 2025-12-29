import { Box, RadioGroup, FormControlLabel, Radio, Typography } from '@mui/material'
import { greenRadioSx } from '../../theme/radioStyles.js'

const CaseSoleProprietor = ({ value, onChange }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography sx={{ fontSize: 16, fontWeight: 600, mb: 1 }}>
        Are you a Sole Proprietor?
      </Typography>

      <RadioGroup
        row
        value={value === null ? '' : value ? 'yes' : 'no'}
        onChange={(e) => onChange(e.target.value === 'yes')}
      >
        <FormControlLabel
          value="yes"
          control={<Radio sx={greenRadioSx} />}
          label="Yes"
        />
        <FormControlLabel
          value="no"
          control={<Radio sx={greenRadioSx} />}
          label="No"
        />
      </RadioGroup>
    </Box>
  )
}

export default CaseSoleProprietor
