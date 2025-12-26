import { Box } from "@mui/material";
import HeroHeader from "./HeroHeader";
import HeroCarousel from "./HeroCarousel";

const HeroSection = () => {
  return (
    <Box>
      {/* Sub-section 1 */}
      <HeroHeader />

      {/* Sub-section 2 */}
      <HeroCarousel />
    </Box>
  );
};

export default HeroSection;
