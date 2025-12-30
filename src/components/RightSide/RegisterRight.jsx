import { useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import SoleProprietor from "./SoleProprietor";
import ExistingCustomer from "./ExistingCustomer";
import RegisterForm from "./RegisterForm";
import Error from "./Error";
import ExistingCustomerModal from "./ExistingCustomerModal";

const RegisterRight = () => {
  const [soleProprietor, setSoleProprietor] = useState(null);
  const [existingCustomer, setExistingCustomer] = useState(null);
  const [openExistingModal, setOpenExistingModal] = useState(false);

  const showHeader = soleProprietor !== false;

  const handleExistingCustomerChange = (value) => {
    if (value === true) {
      setExistingCustomer(true);
      setOpenExistingModal(true);
    } else {
      setExistingCustomer(false);
    }
  };

  return (
    <Box sx={{ width: "100%", pt: 4 }}>
      {/* ================= HEADER (LEFT ALIGNED, FULL WIDTH) ================= */}
      {showHeader && (
        <Box sx={{ px: { xs: 2, md: 6 } }}>
          <Typography
            sx={{
              fontSize: 24,
              fontWeight: 700,
              color: "#0B7A65",
              lineHeight: "24px",
              letterSpacing: "-1px",
            }}
          >
            Welcome
          </Typography>

          <Typography
            sx={{
              mt: 1,
              fontSize: 16,
              fontWeight: 400,
              color: "#4A4A4A",
            }}
          >
            To open an account, you must be operating a business in the United
            States only.
          </Typography>

          {/* FULL WIDTH divider of right panel */}
          <Divider sx={{ my: 3 }} />
        </Box>
      )}

      {/* ================= CENTERED CONTENT ================= */}
      <Box
        sx={{
          maxWidth: 600,
          mx: "auto",
          px: { xs: 2, md: 0 },
        }}
      >
        {soleProprietor === null && (
          <SoleProprietor value={soleProprietor} onChange={setSoleProprietor} />
        )}

        {soleProprietor === false && <Error />}

        {soleProprietor === true && (
          <ExistingCustomer
            value={existingCustomer}
            onChange={handleExistingCustomerChange}
          />
        )}

        {soleProprietor === true && existingCustomer === false && (
          <RegisterForm
            onBack={() => {
              setSoleProprietor(null);
              setExistingCustomer(null);
            }}
          />
        )}
      </Box>

      {/* ================= MODAL ================= */}
      <ExistingCustomerModal
        open={openExistingModal}
        onClose={() => {
          setOpenExistingModal(false);
          setExistingCustomer(null);
        }}
      />
    </Box>
  );
};

export default RegisterRight;
