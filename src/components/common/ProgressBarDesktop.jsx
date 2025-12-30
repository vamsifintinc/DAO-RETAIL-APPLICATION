import React from "react";
import Box from "@mui/material/Box";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressBarDesktop = ({ stepValue, totalSteps = 5 }) => {
  const percentage = (stepValue / totalSteps) * 100;

  return (
    <Box
      className="progress-round">
      <CircularProgressbar
        value={percentage}
        text={`${stepValue} / ${totalSteps}`}
        strokeWidth={10}
        background
        styles={buildStyles({
          textColor: "#0b7a69",
          pathColor: "#bcd10a",
          trailColor: "#0b7a69",
          strokeLinecap: "butt",
          backgroundColor: "#ffffff",
        })}
      />
    </Box>
  );
};

export default ProgressBarDesktop;
