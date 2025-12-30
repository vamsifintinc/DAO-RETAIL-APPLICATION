//import styled, { css } from "styled-components";
import styled from "@emotion/styled";
import { styled as muiStyled } from "@mui/material/styles";
import { BreakPoints } from "../../constants/breakpoints";
import {
  FilledInput,
  TextField,
  Button,
  Stack,
  Box,
  Grid,
} from "@mui/material";
import Colors from "../../constants/colors";

const LeftSideGridBox = styled("div")(({ theme }) => ({
  //padding: theme.spacing(1),
  [theme.breakpoints.down("md_p")]: {
    display: "none",
  },
  [theme.breakpoints.up("md_p")]: {
    display: "block",
  },
}));
const MobileHeaderBox = styled("div")(({ theme }) => ({
  //padding: theme.spacing(1),
  [theme.breakpoints.down("md_p")]: {
    display: "block",
  },
  [theme.breakpoints.up("md_p")]: {
    display: "none",
  },
}));
const ToggleMenu = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  flex-flow: column nowrap;

  height: 100vh;
  background-size: cover;
  color: #ffffff;
  font-size: 1.5em;
  float: left;

  & .icon {
    float: right;
    width: 15px;
    position: relative;
    top: 10px;
    cursor: pointer;
  }
  & .heading {
    font-size: 1.6rem;
    font-weight: 700;
    color: #fff;
  }
  & .sub-heading {
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
  }
  .leftsidemenu {
    height: 100vh;
    position: fixed;
    width: 25%;
  }
  .leftsidemenu-top {
    background: ${Colors.LEFT_NAV_GREEN};
    padding: 20px;
    height: 63%;
  }

  .leftsidemenu-middle {
    background: #fff;
    height: 12%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    .step-name {
      color: ${Colors.LEFT_NAV_GREEN};
      margin-left: auto;
      font-family: "Poppins", sans-serif !important;
      font-size: 1.2rem;
      text-align: center;
      font-weight: 600;
    }
    .progress-bar {
      margin-left: auto;
      padding-right: 20px;
    }
    .progress-round {
      width: 60px;
      height: 60px;
      font-family: "Poppins", sans-serif !important;
      font-weight: 600;
    }
  }
  .leftsidemenu-bottom {
    background: ${Colors.LEFT_NAV_GREEN};
    height: 25%;
  }
  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    color: #fff;
    .divider {
      width: 85%;
      background-color: #51b9a5;
      height: 1px;
      margin: 0 auto;
    }
    .separate {
      border-right: 1px solid #fff;
      padding-right: 10px;
      margin-right: 10px;
      text-align: left;
    }
    a {
      font-size: 1.2rem;
      font-family: "Poppins", sans-serif !important;
      display: inline-block;
      margin-bottom: 8px;
      color: #fff;
      font-weight:600;
    }
    .copyright {
      font-family: "Poppins", sans-serif !important;
      font-weight: 600;
      font-size: 13px;
    }
    .phone-icon {
      height: 26px;
      position: relative;
      top: -3px;
    }
  }

  @media (min-width: ${BreakPoints.xl_p}px) {
    .leftsidemenu-top {
      height: 60%;
    }
    .leftsidemenu-middle {
      height: 13%;
      .step-name {
        font-size: 1.6rem;
      }
      .progress-round {
        width: 80px;
        height: 80px;
        font-family: "Poppins", sans-serif !important;
        font-weight: 600;
      }
    }
    .leftsidemenu-bottom {
      height: 27%;
    }
    .footer {
      a {
        font-size: 1.6rem;
      }
      .copyright {
        font-size: 14px;
      }
    }
  }
`;
const MobileToggleMenu = styled.div`
  z-index: 10;

  & .innerOverlay {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-color: #fff;
    background-position: center bottom;
  }

  .headmenu {
    height: 60px;
    background: ${Colors.LEFT_NAV_GREEN};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem;
  }
  .mobile-launch {
    height: 220px;
    text-align: center;
    padding: 1.25rem 1.25rem 0 1.25rem;
  }
  .step-name {
    color: #fff;
    font-family: "Poppins", sans-serif !important;
    font-weight: 600;
  }
  .progress-round {
    width: 2.7rem;
    height: 2.7rem;
    font-family: "Poppins", sans-serif !important;
    font-weight: 600;
  }
  .progress-bar {
    padding-right: 0.75rem;
  }
`;
export {
  LeftSideGridBox,
  ToggleMenu,
  MobileHeaderBox,
  MobileToggleMenu
};
