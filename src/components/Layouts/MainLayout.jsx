import { Box, Grid } from "@mui/material";
import LeftSideGrid from "../common/LeftSideGrid";

const MainLayout = ({ children, pageConstants }) => {
  return (
    <Grid container minHeight="100vh">
      {/* LEFT SIDE */}
      <Grid size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}>
        <LeftSideGrid pageConstants={pageConstants} />
      </Grid>

      {/* RIGHT SIDE */}
      <Grid
        size={{ xs: 12, md: 9 }}
        sx={{
          display: "flex",
          alignItems: "stretch",
          backgroundColor: "#fff",
        }}
      >
        <Box
          sx={{
            width: "100%",
            px: 0,
            py: 0,
          }}
        >
          {children}
        </Box>
      </Grid>
    </Grid>
  );
};

export default MainLayout;
