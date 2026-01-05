import { Box, Grid } from "@mui/material";
import LeftSideGrid from "../common/LeftSideGrid";
import { useTheme, useMediaQuery } from "@mui/material";

const MainLayout = ({ children, pageConstants }) => {
  const theme = useTheme();
  const isBelow990 = useMediaQuery(theme.breakpoints.down("md_p"));

  return (
    <Grid
      container
      minHeight="100vh"
      direction={isBelow990 ? "column" : "row"}
    >
      {/* LEFT SIDE */}
      <Grid
        item
        sx={{
          width: isBelow990 ? "100%" : "25%",
          flexShrink: 0,
        }}
      >
        <LeftSideGrid pageConstants={pageConstants} />
      </Grid>

      {/* RIGHT SIDE */}
      <Grid
        item
        sx={{
          width: isBelow990 ? "100%" : "75%",
          display: "flex",
          backgroundColor: "#fff",
          justifyContent: isBelow990 ? "flex-start" : "center",
          alignItems: "stretch",
          py: 0,
        }}
      >
        <Box sx={{ width: "100%" }}>{children}</Box>
      </Grid>
    </Grid>
  );
};

export default MainLayout;
