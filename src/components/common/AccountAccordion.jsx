import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box,
    Typography,
    Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import COLORS from "../../constants/colors";

const AccountAccordion = ({ title, icon, items, defaultExpanded = false }) => {
    return (
        <Accordion defaultExpanded={defaultExpanded} sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: COLORS.WHITE }} />
            }
                sx={{
                    backgroundColor: COLORS.ACCORDION_BG,
                    color: COLORS.ACCORDION_TEXT,

                    "&:hover": {
                        backgroundColor: COLORS.ACCORDION_HOVER_BG,
                    },

                    "&.Mui-expanded": {
                        backgroundColor: COLORS.ACCORDION_BG,
                    },

                    "& .MuiAccordionSummary-content": {
                        color: COLORS.WHITE,
                    },
                }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    {icon && (
                        <Box
                            component="img"
                            src={icon}
                            alt={title}
                            sx={{ width: 22, height: 22 }}
                        />
                    )}

                    <Typography fontWeight={600}>{title}</Typography>
                </Box>
                {/* <Typography fontWeight={600}>{title}</Typography> */}
            </AccordionSummary>
<AccordionDetails
  sx={{
    backgroundColor: "#F7F7F7",
    py: 3,
  }}
>
  {items?.length ? (
    items.map((item, index) => (
      <Box
        key={index}
        sx={{
          flexBasis: { xs: "100%", md: "50%" },
          maxWidth: { xs: "100%", md: "50%" },
          display: "flex",
          p: 3,
          mb: 2,
          border: "1px solid #E0E0E0",
          borderRadius: "12px",
          backgroundColor: "#FFFFFF",
          gap: 3,
          alignItems: "flex-start",
          boxShadow: "0 6px 14px rgba(0, 0, 0, 0.12)",
        }}
      >
        {/* LEFT : PRODUCT IMAGE */}
        {icon && (
          <Box
            component="img"
            src={icon}
            alt={item.name}
            sx={{
              width: 64,
              height: 64,
              mt: 0.5,
              flexShrink: 0,
            }}
          />
        )}

        {/* RIGHT : CONTENT */}
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 700,
              color: COLORS.GREEN_TEXT,
              mb: 1,
            }}
          >
            {item.name}
          </Typography>

          {/* Divider like existing UI */}
          <Box
            sx={{
              height: "1px",
              backgroundColor: "#E0E0E0",
              my: 2,
            }}
          />

          {/* ACTION ROW */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {/* ADD BUTTON */}
            <Button
              variant="outlined"
              sx={{
                fontWeight: 700,
                textTransform: "uppercase",
                borderColor: COLORS.GREEN_TEXT,
                color: COLORS.GREEN_TEXT,
                px: 4,
                py: 1.2,
              }}
            >
              ADD THIS ACCOUNT
            </Button>

            {/* LEARN MORE (ⓘ icon later) */}
            <Typography
              sx={{
                fontWeight: 600,
                color: COLORS.GREEN_TEXT,
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Learn More
            </Typography>
          </Box>
        </Box>
      </Box>
    ))
  ) : (
    <Typography color="text.secondary">
      No products available
    </Typography>
  )}
</AccordionDetails>

        </Accordion>
    );
};

export default AccountAccordion;