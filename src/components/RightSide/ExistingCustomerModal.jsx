import { Dialog, Box, Typography, Button } from "@mui/material";
import WarningIcon from "@mui/icons-material/ReportProblemOutlined";

const ExistingCustomerModal = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          textAlign: "center",
          p: 4,
        },
      }}
    >
      {/* ICON */}
      <Box
        sx={{
          mx: "auto",
          mb: 2,
          width: 56,
          height: 56,
          borderRadius: "50%",
          backgroundColor: "#E6F4F1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <WarningIcon sx={{ color: "#0B7A65", fontSize: 30 }} />
      </Box>

      {/* MESSAGE */}
      <Typography sx={{ fontSize: 15, color: "#333", mb: 3 }}>
        If you are an existing customer with Bank of Hope, please contact your
        current branch to open a new business checking account.
      </Typography>

      {/* BUTTON */}
      <Button
        variant="contained"
        onClick={onClose}
        sx={{
          backgroundColor: "#0B7A65",
          px: 4,
          "&:hover": {
            backgroundColor: "#096655",
          },
        }}
      >
        CLOSE
      </Button>
    </Dialog>
  );
};

export default ExistingCustomerModal;
