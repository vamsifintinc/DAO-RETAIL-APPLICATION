// utils/formValidations.js

export const extractDigits = (value) => {
  // remove +1 first, then extract digits
  const cleaned = value.replace(/^\+1\s*/, "");
  return cleaned.replace(/\D/g, "").slice(0, 10);
};

export const formatUSPhone = (digits) => {
  if (!digits) return "";

  const area = digits.slice(0, 3);
  const mid = digits.slice(3, 6);
  const last = digits.slice(6, 10);

  if (digits.length < 4) return `+1 (${area}`;
  if (digits.length < 7) return `+1 (${area}) ${mid}`;
  return `+1 (${area}) ${mid}-${last}`;
};

export const validatePhone = (value) => {
  if (!value) return "Enter Business Phone Number";
  if (value.length !== 10) return "Phone number must be 10 digits";
  if (value[0] === "0" || value[0] === "1")
    return "Business Phone Number Should Not start with 0 or 1";
  return "";
};

export const validateConfirmPhone = (phone, confirm) => {
  if (!confirm) return "Enter Confirm Business Phone Number";
  if (phone !== confirm)
    return "Business Phone Number and Confirm Business Phone Number are not matching";
  return "";
};

export const validateEmail = (value) => {
  if (!value) return "Enter Business Email Address";
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(value) ? "" : "Enter valid Business Email Address (user@example.com)";
};
