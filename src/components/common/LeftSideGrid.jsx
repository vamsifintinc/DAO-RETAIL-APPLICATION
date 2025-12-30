import React from "react";
import Box from "@mui/material/Box";
import Images from "../../constants/images";
import ProgressBarDesktop from "./ProgressBarDesktop";
import {
  ToggleMenu,
  MobileToggleMenu,
  LeftSideGridBox,
  MobileHeaderBox,
} from "../Elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
const CONTACT_NUMBER = "1-877-275-4236";
const LeftSideGrid = ({ pageConstants }) => {
  return (
    <>
      <LeftSideGridBox>
        <ToggleMenu>
          <Box className="leftsidemenu">
            <Box className="leftsidemenu-top">
              <Box>
                <a href="https://www.bankofhope.com/">
                  <img src={Images.LOGO} className="logo" alt="logo" />
                </a>
              </Box>
              <Box sx={{ height: "80%", position: "relative" }}>
                <Box sx={{ bottom: 0, left: 0, position: "absolute" }}>
                  <img
                    src={pageConstants.stepImage}
                    alt="step"
                    style={{ width: "100%" }}
                  />
                </Box>
              </Box>
            </Box>
            <Box className="leftsidemenu-middle">
              <Box className="step-name">{pageConstants.stepName}</Box>
              <Box className="progress-bar">

                <ProgressBarDesktop
                  stepValue={pageConstants.currentStep}
                  totalSteps={pageConstants.totalSteps}
                />
              </Box>
            </Box>

            <Box className="leftsidemenu-bottom">
              <Box className="footer">
             <a href={`tel:+${CONTACT_NUMBER.replace(/-/g, "")}`}>
                 <span> <FontAwesomeIcon icon={faPhone} size="lg" />{" "}</span>
                  <span> {CONTACT_NUMBER}</span>
                </a>

                <Box className="divider"></Box>
                <Box className="pl-3 pr-3 d-block">
                  <Box component="span" className="pull-left">
                    <img
                      src={Images.FOOTER_LOGO}
                      width="100px"
                      className="footer-logo"
                      alt="footer logo"
                    />
                  </Box>
                  <Box component="span" className="pull-right pt-3 copyright">
                                     {/* <span className="copyright"> */}
                    © {new Date().getFullYear()} Bank of Hope
                  {/* </span> */}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </ToggleMenu>
      </LeftSideGridBox>

      <MobileHeaderBox>
        <MobileToggleMenu>
          <Box className="innerOverlay">
            <Box className="headmenu">
              <Box>
                <a href="https://www.bankofhope.com/">
                  <img
                    src={Images.MOBILE_LOGO}
                    className="mobile-logo"
                    alt="logo"
                  />
                </a>
              </Box>
              <Box className="flex-vcenter white-color" sx={{ ml: 2, mr: 2 }}>
              <Box className="progress-bar">

                <ProgressBarDesktop
                  stepValue={pageConstants.currentStep}
                  totalSteps={pageConstants.totalSteps}
                />
              </Box>
                <Box className="step-name">{pageConstants.stepName}</Box>
              </Box>
              <Box>
             <a href={`tel:+${CONTACT_NUMBER.replace(/-/g, "")}`}>
                  <FontAwesomeIcon icon={faPhone} size="lg" color="#fff"/>{" "}
                  {/* {CONTACT_NUMBER} */}
                </a>

              </Box>
            </Box>
            <Box className="mobile-launch">
              <img
                src={pageConstants.stepImage}
                alt="step"
                style={{ height: "100%" }}
              />
            </Box>
          </Box>
        </MobileToggleMenu>
      </MobileHeaderBox>
    </>
  );
};

export default LeftSideGrid;
