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
    <Box
      sx={{
        width: "100%",
        maxWidth: 560,
        mx: "auto",
        px: { xs: 2, md: 0 },
        pt: 4,
      }}
    >
      {/* HEADER (HIDDEN FOR ERROR CASE ONLY) */}
      {showHeader && (
        <>
          <Typography sx={{ fontSize: 32, fontWeight: 700, color: "#0B7A65" }}>
            Welcome
          </Typography>

          <Typography sx={{ mt: 1, fontSize: 15, color: "#4A4A4A" }}>
            To open an account, you must be operating a business in the United
            States only.
          </Typography>

          <Divider sx={{ my: 3 }} />
        </>
      )}

      {/* CASE 1 */}
      {soleProprietor === null && (
        <SoleProprietor value={soleProprietor} onChange={setSoleProprietor} />
      )}

      {/* CASE 1 → NO (ERROR PAGE ONLY) */}
      {soleProprietor === false && <Error />}

      {/* CASE 2 */}
      {soleProprietor === true && (
        <ExistingCustomer
          value={existingCustomer}
          onChange={handleExistingCustomerChange}
        />
      )}

      {/* CASE 3 */}
      {soleProprietor === true && existingCustomer === false && (
        <RegisterForm
          onBack={() => {
            setSoleProprietor(null);
            setExistingCustomer(null);
          }}
        />
      )}
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
