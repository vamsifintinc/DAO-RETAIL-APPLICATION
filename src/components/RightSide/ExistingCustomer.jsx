import { RadioGroup, FormControlLabel, Radio, Typography } from "@mui/material";
import { greenRadioSx } from "../../theme/radioStyles";

const ExistingCustomer = ({ value, onChange }) => {
  return (
    <>
      <Typography sx={{ fontWeight: 600, mb: 1 }}>
        Are you an existing Bank of Hope customer?
      </Typography>

      <RadioGroup
        row
        value={value === null ? "" : value ? "yes" : "no"}
        onChange={(e) => onChange(e.target.value === "yes")}
      >
        <FormControlLabel value="yes" control={<Radio sx={greenRadioSx} />} label="Yes" />
        <FormControlLabel value="no" control={<Radio sx={greenRadioSx} />} label="No" />
      </RadioGroup>
    </>
  );
};

export default ExistingCustomer;
