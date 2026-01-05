import { Box, Typography } from "@mui/material";
import AccountAccordion from "../common/AccountAccordion";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import COLORS from "../../constants/colors";

const AccountSelection = () => {
  const location = useLocation();
  const [selectedAccounts, setSelectedAccounts] = useState([]);

  const accountCount = selectedAccounts.length;

  const addAccount = (account) => {
    setSelectedAccounts((prev) => [...prev, account]);
  };

  const removeAccount = (account) => {
    setSelectedAccounts((prev) =>
      prev.filter((a) => a.name !== account.name)
    );
  };

  const expandCD = location.pathname.toLowerCase().includes("cd");
  const expandMMA = location.pathname.toLowerCase().includes("mma");

  return (
    <Box sx={{ mt: 4 }}>
      {/* ===== YOUR ACCOUNTS HEADER ===== */}
      <Box sx={{ mb: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: 700,
              color: "#0B7A65",
            }}
          >
            Your Accounts
          </Typography>

          {/* COUNT BADGE */}
          <Box
            sx={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
              fontWeight: 700,
              color: COLORS.WHITE,
              backgroundColor:
                accountCount > 0 ? COLORS.ACCORDION_HOVER_BG : "#D9D9D9",
            }}
          >
            {accountCount}
          </Box>
        </Box>

        <Typography
          sx={{
            mt: 1,
            fontWeight: 600,
            color: "#0B7A65",
            cursor: "pointer",
          }}
        >
          + Add more new accounts
        </Typography>
        <Typography
  sx={{
    mt: 2,
    fontSize: 14,
    color: COLORS.NOTE_TEXT,
    lineHeight: "20px",
  }}
>
Note:The maximum opening deposit amount allowed via online account
  opening is $250,000.00 per account. Contact us at 1-877-275-4236 for additional
  assistance.
</Typography>

      </Box>

      {/* ===== ACCORDIONS ===== */}
      <AccountAccordion
        title="Checking Account"
        items={[
          { name: "Bank Simply Checking", rate: "No monthly fee" },
        ]}
        onAdd={addAccount}
        onRemove={removeAccount}
      />

      <AccountAccordion
        title="Savings Account"
        items={[
          { name: "Personal Savings", rate: "Up to 0.05% APY" },
        ]}
        onAdd={addAccount}
        onRemove={removeAccount}
      />

      <AccountAccordion
        title="Money Market"
        defaultExpanded={expandMMA}
        items={[
          { name: "Money Market Account", rate: "Competitive rates" },
        ]}
        onAdd={addAccount}
        onRemove={removeAccount}
      />

      <AccountAccordion
        title="Certificate of Deposit"
        defaultExpanded={expandCD}
        items={[
          { name: "12 Month CD", rate: "Up to 4.5% APY" },
        ]}
        onAdd={addAccount}
        onRemove={removeAccount}
      />
    </Box>
  );
};

export default AccountSelection;
