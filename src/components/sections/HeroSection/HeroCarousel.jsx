import { Box, Button, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import heroCarouselData from "./heroCarouselData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import HeroButton from "../../common/HeroButton";

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);
  const total = heroCarouselData.length;
  const data = heroCarouselData[index];

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      {/* Background Image */}
      <Box
        component="img"
        src={data.image}
        alt="hero"
        sx={{
          width: "100%",
          height: "450px",
          objectFit: "cover",
        }}
      />

      {/* RIGHT SIDE OVERLAY CONTENT */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          right: "6%",
          transform: "translateY(-50%)",
          maxWidth: "520px",
          textAlign: "left",
        }}
      >
        <Typography variant="overline" color="success.main">
          Previous
        </Typography>

        <Typography variant="h4" fontWeight={700} gutterBottom>
          {data.title}
        </Typography>

        <Typography color="text.secondary">
          {data.subtitle}
        </Typography>

        <Typography variant="h5" color="success.main" mt={1}>
          {data.apy}
        </Typography>

        <Typography variant="caption" display="block" mb={3}>
          $1,000 minimum opening deposit
        </Typography>
      {/* ✅ REUSABLE CTA */}
        <HeroButton />

      </Box>

      {/* LEFT ARROW */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: 16,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(255,255,255,0.8)",
          "&:hover": { backgroundColor: "#fff" },
        }}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </IconButton>

      {/* RIGHT ARROW */}
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: 16,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(255,255,255,0.8)",
          "&:hover": { backgroundColor: "#fff" },
        }}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </IconButton>
    </Box>
  );
};

export default HeroCarousel;
