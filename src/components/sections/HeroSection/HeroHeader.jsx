import { Box, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const HeroHeader = () => {
  return (
    <Box
      sx={{
        px: 4,
        py: 1.5,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #eee",
        backgroundColor: "#fff",
      }}
    >
      {/* Logo */}
      <Typography fontWeight={700} color="success.main">
        Bank of Hope
      </Typography>

      {/* Phone */}
      <Box display="flex" alignItems="center" gap={1}>
        <FontAwesomeIcon icon={faPhone} color="#2e7d32" />
        <Box>
          <Typography fontSize={14} color="success.main">
            1-877-275-4236
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Mon–Fri, 8:00 a.m.–5:30 p.m.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroHeader;
