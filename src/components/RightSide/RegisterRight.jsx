import { useState } from "react";
import {
  Box,
  Divider,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { getStartedActions } from "../../store/getstarted-slice";

import SoleProprietor from "./SoleProprietor";
import ExistingCustomer from "./ExistingCustomer";
import RegisterForm from "./RegisterForm";
import Error from "./Error";
import ExistingCustomerModal from "./ExistingCustomerModal";

const RegisterRight = () => {
  const theme = useTheme();
  const isBelow990 = useMediaQuery(theme.breakpoints.down("md_p"));
  const dispatch = useDispatch();

  const [soleProprietor, setSoleProprietor] = useState(null);
  const [existingCustomer, setExistingCustomer] = useState(null);
  const [openExistingModal, setOpenExistingModal] = useState(false);

  const showHeader = !isBelow990 || !(soleProprietor === true && existingCustomer === false);

  const showFooter = soleProprietor === null || (soleProprietor === true && existingCustomer === null);

  const handleSoleProprietorChange = (value) => {
    setSoleProprietor(value);
    dispatch(getStartedActions.setSoleProprietor(value));
  };

  const handleExistingCustomerChange = (value) => {
    setExistingCustomer(value);
    dispatch(getStartedActions.setExistingCustomer(value));

    if (value === true) {
      setOpenExistingModal(true);
    }
  };

  const Content = (
    <>
      {showHeader && (
        <>
          <Typography
            sx={{
              fontSize: 24,
              fontWeight: 700,
              color: "#0B7A65",
              letterSpacing: "-0.5px",
            }}
          >
            Welcome
          </Typography>

          <Typography sx={{ mt: 1, fontSize: 16, color: "#4A4A4A" }}>
            To open an account, you must be operating a business in the United
            States only.
          </Typography>

          <Divider sx={{ my: 3 }} />
        </>
      )}

      {soleProprietor === null && (
        <SoleProprietor
          value={soleProprietor}
          onChange={handleSoleProprietorChange}
        />
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
            dispatch(getStartedActions.resetGetStarted());
          }}
        />
      )}
    </>
  );

return (
  <Box sx={{ width: "100%" }}>
    {/* ================= DESKTOP (>= 990) ================= */}
    {!isBelow990 && (
      <>
        {/* HEADER – FULL WIDTH */}
        {showHeader && (
          <Box sx={{ px: 6, pt: 4 }}>
            <Typography
              sx={{
                fontSize: 24,
                fontWeight: 700,
                color: "#0B7A65",
                letterSpacing: "-0.5px",
              }}
            >
              Welcome
            </Typography>

            <Typography sx={{ mt: 1, fontSize: 16, color: "#4A4A4A" }}>
              To open an account, you must be operating a business in the United
              States only.
            </Typography>

            <Divider sx={{ my: 3 }} />
          </Box>
        )}

        {/* BODY – CENTERED */}
        <Box
          sx={{
            maxWidth: 720,
            mx: "auto",
            px: 2,
          }}
        >
          {soleProprietor === null && (
            <SoleProprietor
              value={soleProprietor}
              onChange={handleSoleProprietorChange}
            />
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
                dispatch(getStartedActions.resetGetStarted());
              }}
            />
          )}
        </Box>
      </>
    )}

    {/* ================= MOBILE (< 990) – UNTOUCHED ================= */}
    {isBelow990 && (
      <Box sx={{ width: "100%", px: "20px" }}>
        <Box
          sx={{
            width: "100%",
            bgcolor: "#fff",
            borderRadius: "6px",
            borderWidth: "6px 1px 1px",
            borderStyle: "solid",
            borderColor:
              "rgb(3, 142, 126) rgb(221, 221, 221) rgb(221, 221, 221)",
            boxShadow: "rgba(0, 0, 0, 0.15) 0px 0.3rem 0.5rem",
            p: "1.25rem",
          }}
        >
          {Content}

          {showFooter && (
            <Box sx={{ mt: 4 }}>
              <Divider sx={{ mb: 2, mt: 12 }} />
              <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
                <Typography fontSize={14}>
                  Member <b>FDIC</b> / Equal Housing Lender
                </Typography>
                <img
                  src="https://stgbankofhope.microsoftcrmportals.com/daoc-mobile-lander"
                  alt="Lender"
                  width={24}
                />
              </Box>
              <Typography textAlign="center" mt={1} fontSize={14}>
                © 2026 Bank of Hope
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
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
