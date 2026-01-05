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

const AccountAccordion = ({ title, items, defaultExpanded = false }) => {
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
                <Typography fontWeight={600}>{title}</Typography>
            </AccordionSummary>

            <AccordionDetails>
                {items?.length ? (
                    items.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                p: 2,
                                mb: 2,
                                border: "1px solid #ddd",
                                borderRadius: 2,
                            }}
                        >
                            <Typography fontWeight={600}>{item.name}</Typography>
                            <Typography fontSize={13} color="text.secondary">
                                {item.rate}
                            </Typography>

                            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                                <Button variant="outlined">ADD THIS ACCOUNT</Button>
                                <Button variant="text">Learn More</Button>
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