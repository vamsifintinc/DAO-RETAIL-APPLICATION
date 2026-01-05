import { Box, Grid } from "@mui/material";
import LeftSideGrid from "../common/LeftSideGrid";
import { useTheme, useMediaQuery } from "@mui/material";

const MainLayout = ({ children, pageConstants }) => {
  const theme = useTheme();
  const isBelow990 = useMediaQuery(theme.breakpoints.down("md_p"));

  return (
    <Grid container minHeight="100vh">
      {/* LEFT SIDE */}
      <Grid
        sx={{
          width: isBelow990 ? "100%" : "25%",
          flexShrink: 0,
        }}
      >
        <LeftSideGrid pageConstants={pageConstants} />
      </Grid>

      {/* RIGHT SIDE */}
      <Grid
        sx={{
          width: isBelow990 ? "100%" : "75%",
          backgroundColor: "#fff",
        }}
      >
        {/* IMPORTANT: no centering here */}
        {children}
      </Grid>
    </Grid>
  );
};

export default MainLayout;
