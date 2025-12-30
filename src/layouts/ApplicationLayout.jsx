import { Grid } from "@mui/material";
import LeftSideGrid from "../components/common/LeftSideGrid";

const ApplicationLayout = ({ pageConstants, children }) => {
  return (
    <Grid container >
      {/* LEFT SIDE (COMMON) */}
      <Grid size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}>
        <LeftSideGrid pageConstants={pageConstants} />
      </Grid>
    </Grid>
  );
};

export default ApplicationLayout;
