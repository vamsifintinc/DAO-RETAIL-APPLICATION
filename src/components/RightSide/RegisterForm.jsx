import { useEffect, useState } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  Checkbox,
  Typography,
  Button,
  Dialog,
  DialogContent,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { getStartedActions } from "../../store/getstarted-slice";


import {
  extractDigits,
  formatUSPhone,
  validateEmail,
  validatePhone,
  validateConfirmPhone,
} from "../../utils/formValidations";

/* ================== LABEL COLOR ================== */
const getLabelColor = ({ touched, focused, error }) => {
  if (!touched) return "#000";
  if (focused) return "#0B7A65";
  if (error) return "#D32F2F";
  return "#0B7A65";
};

const RegisterForm = ({ onBack }) => {
  const [formValues, setFormValues] = useState({
    Email: { value: "", error: false, message: "", touched: false },
    PhoneNumber: { value: "", error: false, message: "", touched: false },
    ConfirmPhoneNumber: {
      value: "",
      error: false,
      message: "",
      touched: false,
    },
    IsESign: { value: false },
  });
  const dispatch = useDispatch();


  const [focused, setFocused] = useState({});
  const [openDisclosure, setOpenDisclosure] = useState(false);
  const [disclosureRead, setDisclosureRead] = useState(false);
  const [blinkDisclosure, setBlinkDisclosure] = useState(false);
  const [continueEnabled, setContinueEnabled] = useState(false);

  /* ================== VALIDATION ================== */
  useEffect(() => {
    setFormValues((prev) => {
      const emailMsg = validateEmail(prev.Email.value);
      const phoneMsg = validatePhone(prev.PhoneNumber.value);
      const confirmMsg = validateConfirmPhone(
        prev.PhoneNumber.value,
        prev.ConfirmPhoneNumber.value
      );

      return {
        ...prev,
        Email: { ...prev.Email, error: !!emailMsg, message: emailMsg },
        PhoneNumber: {
          ...prev.PhoneNumber,
          error: !!phoneMsg,
          message: phoneMsg,
        },
        ConfirmPhoneNumber: {
          ...prev.ConfirmPhoneNumber,
          error: !!confirmMsg,
          message: confirmMsg,
        },
      };
    });
  }, [
    formValues.Email.value,
    formValues.PhoneNumber.value,
    formValues.ConfirmPhoneNumber.value,
  ]);

  /* ================== CONTINUE ENABLE ================== */
  useEffect(() => {
    const valid =
      !formValues.Email.error &&
      !formValues.PhoneNumber.error &&
      !formValues.ConfirmPhoneNumber.error &&
      formValues.Email.value &&
      formValues.PhoneNumber.value &&
      formValues.ConfirmPhoneNumber.value &&
      disclosureRead &&
      formValues.IsESign.value;

    setContinueEnabled(Boolean(valid));
  }, [formValues, disclosureRead]);

  /* ================== HANDLERS ================== */
  const handleBlur = (field) => {
    setFocused((p) => ({ ...p, [field]: false }));
    setFormValues((p) => ({
      ...p,
      [field]: { ...p[field], touched: true },
    }));
  };

  const handleChange = (field, value) => {
    setFormValues((p) => ({
      ...p,
      [field]: { ...p[field], value },
    }));
  };

  const handleCheckboxClick = () => {
    if (!disclosureRead) {
      setBlinkDisclosure(true);
      return;
    }

    setFormValues((p) => ({
      ...p,
      IsESign: { value: !p.IsESign.value },
    }));
  };

  /* ================== FIELD RENDER ================== */
  const renderField = ({ field, label, placeholder, icon, format }) => {
    const f = formValues[field];
    const error = f.touched && f.error;

    const labelColor = getLabelColor({
      touched: f.touched,
      focused: focused[field],
      error,
    });

    return (
      <TextField
        fullWidth
        variant="filled"
        label={label}
        placeholder={placeholder}
        value={format ? format(f.value) : f.value}
        error={error && !focused[field]}
        helperText={error && !focused[field] ? f.message : ""}
        onFocus={() => setFocused((p) => ({ ...p, [field]: true }))}
        onBlur={() => handleBlur(field)}
        onChange={(e) =>
          handleChange(
            field,
            format ? extractDigits(e.target.value) : e.target.value
          )
        }
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FontAwesomeIcon icon={icon} />
            </InputAdornment>
          ),
        }}
        sx={{
          mb: 2,
          "& .MuiInputLabel-root": {
            color: labelColor,
            fontWeight: 600,
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#0B7A65",
          },
          "& .MuiFilledInput-underline:after": {
            borderBottomColor: error ? "#D32F2F" : "#0B7A65",
          },
        }}
      />
    );
  };

  /* ================== RENDER ================== */
  return (
    <>
      {/* KEYFRAMES */}
      <style>
        {`
          @keyframes blinkDisclosure {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>

      <Box sx={{ mt: 4, p: 3, borderRadius: 2, boxShadow: 3 }}>
        {renderField({
          field: "Email",
          label: "BUSINESS EMAIL ADDRESS",
          placeholder: "example@example.com",
          icon: faEnvelope,
        })}

        {renderField({
          field: "PhoneNumber",
          label: "BUSINESS PHONE NUMBER",
          placeholder: "(xxx) xxx-xxxx",
          icon: faSquarePhone,
          format: formatUSPhone,
        })}

        {renderField({
          field: "ConfirmPhoneNumber",
          label: "CONFIRM BUSINESS PHONE NUMBER",
          placeholder: "(xxx) xxx-xxxx",
          icon: faSquarePhone,
          format: formatUSPhone,
        })}

        {/* AGREEMENT */}
        <Box sx={{ display: "flex", mt: 1 }}>
          <Checkbox
            checked={formValues.IsESign.value}
            onClick={handleCheckboxClick}
          />
          <Typography fontSize={14}>
            I agree to the E-Signature and Electronic Disclosures Agreement for
            all applicants in order to process this application.{" "}
            <Box
              component="span"
              onClick={() => {
                setBlinkDisclosure(false); // STOP blinking
                setOpenDisclosure(true);
              }}
              sx={{
                color: "#0B7A65",
                cursor: "pointer",
                fontWeight: 600,
                textDecoration: "underline",
                animation: blinkDisclosure
                  ? "blinkDisclosure 0.8s ease-in-out infinite"
                  : "none",
              }}
            >
              View Disclosures
            </Box>
          </Typography>
        </Box>

        {/* ACTION BUTTONS */}
        <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
          <Button
            variant="outlined"
            fullWidth
            sx={{ color: "#000", borderColor: "#999" }}
            onClick={onBack}
          >
            BACK
          </Button>

          <Button
            variant="contained"
            fullWidth
            disabled={!continueEnabled}
            sx={{
              backgroundColor: continueEnabled ? "#0B7A65" : undefined,
            }}
            onClick={() => {
              dispatch(
                getStartedActions.saveFormData({
                  email: formValues.Email.value,
                  phone: formValues.PhoneNumber.value,
                  confirmPhone: formValues.ConfirmPhoneNumber.value,
                  isESignAccepted: formValues.IsESign.value,
                })
              );
            }}
          >
            CONTINUE
          </Button>
        </Box>
        {/* INFO TEXT */}
        <Typography sx={{ fontSize: 13, color: "#555", mt: 3 }}>
          <b>
            Important Information About Opening a New Account To help the
            government fight the funding of terrorism and money laundering
            activities, Federal law requires all U.S. financial institutions to
            obtain, verify, and record information that identifies each
            individual or legal entity that opens an account. Federal law also
            requires all U.S. financial institutions to obtain, verify, and
            record information that identifies the beneficial owners of a legal
            entity that opens an account or establishes a customer relationship.
            <br />
            <br />
            What this means for you When you open an account, we will ask for
            your name, address, date of birth, social security number and other
            information that will allow us to identify you. We may also
            independently verify your identity through the comparison of
            information provided by you with information obtained from a
            consumer reporting agency, public database, or other source.
            <br />
            <br />
            By clicking “Continue”, you authorize Bank of Hope to obtain a
            consumer report that we may use in considering your application to
            verify the information provided. If your information does not meet
            certain qualifications, your application may be declined.
          </b>
        </Typography>
      </Box>

      {/* ================== DISCLOSURE MODAL ================== */}
      <Dialog open={openDisclosure} maxWidth="md" fullWidth>
        <DialogContent sx={{ p: 4 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            E-SIGN and Electronic Disclosures Agreement
          </Typography>

          <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
            {`Introduction
This E-SIGN and Electronic Disclosures Agreement ("E-Sign Agreement") allows us to provide you with electronic versions of important notices and documents associated with opening an account at Bank of Hope.

Definitions
In this agreement, the words “we” and “us” mean Bank of Hope...

Rev. 10/2022`}
          </Typography>

          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#0B7A65" }}
              onClick={() => {
                setOpenDisclosure(false);
                setDisclosureRead(true);
              }}
            >
              CLOSE
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RegisterForm;
