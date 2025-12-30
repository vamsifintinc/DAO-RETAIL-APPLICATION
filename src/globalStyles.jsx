import { Global, css } from "@emotion/react";

import Images from "./constants/images";
import Colors from "./constants/colors";
import FontSizes from "./constants/fontsizes";
import { BreakPoints } from "./constants/breakpoints";

const GlobalCSS = css`
body {
  margin: 0;
  font-family: "CircularStd-Book";
  font-weight: 400;
  font-size: ${FontSizes.DEFAULT};
  line-height: 1.5;
  color: #333;
  background: #fff;
}

html {
  -webkit-text-size-adjust: 100%; /* Prevent font scaling in landscape while allowing user zoom */
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
a {
  color: inherit;
  text-decoration: none;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}
a:focus {
  outline: none;
}

.font-normal {
  font-family: "CircularStd-Book";
}
.font-medium {
  font-family: "CircularStd-Medium";
}
.font-bold {
  font-family: "CircularStd-Bold";
}
.logo{
  // width:50%;
  width:180px;
  position: relative;
}



  .footer-logo {
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
    filter: alpha(opacity=50);
    -khtml-opacity: 0.5;
    opacity: 0.5;
  }
  .CircularProgressbar {
    width: 100%;
    vertical-align: middle;
  }

  .CircularProgressbar .CircularProgressbar-path {
    stroke: #3e98c7;
    stroke-linecap: round;
    transition: stroke-dashoffset 0.5s ease 0s;
  }

  .CircularProgressbar .CircularProgressbar-trail {
    stroke: #d6d6d6;
    stroke-linecap: round;
  }

  .CircularProgressbar .CircularProgressbar-text {
    fill: #3e98c7;
    font-size: 1.6rem !important;
    dominant-baseline: middle;
    text-anchor: middle;
    transform: translate(0px, 3px);
  }

  .CircularProgressbar .CircularProgressbar-background {
    fill: #d6d6d6;
  }
  .CircularProgressbar.CircularProgressbar-inverted
    .CircularProgressbar-background {
    fill: #3e98c7;
  }

  .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-text {
    fill: #fff;
  }

  .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-path {
    stroke: #fff;
  }

  .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-trail {
    stroke: transparent;
  }
  img {
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
    -ms-user-select: none !important;
    user-select: none !important;
  }
  img {
    vertical-align: middle;
    border-style: none;
  }
  .white-bg {
    background-color: #fff !important;
  }
    .pull-left{
    float:left;
    }
    .pull-right{
    float:right;
    }
    .d-block{
    display:block;}
          .pt-3 {
    padding-top: 1rem !important;
  }
    .pl-3{
    padding-left: 1rem !important
    }
        .pr-3{
    padding-right: 1rem !important
    }
.text-center{
text-align:center;
}
    .mobile-logo {
      width: 26px;
    }
  @media (max-width: 991px) {
    
  }
  @media (min-width: 992px) and (max-width: 1380px) {

  }
  @media (max-width: 320px) {
    .mobile-logo {
      width: 26px;
    }
  }

  @media (min-width: 350px) and (max-width: 375px) {
    .mobile-logo {
      width: 26px;
    }

  }
  @media (max-width: 600px) {

  }
  @media (min-width: 1025px) and (max-width: 1440px) {

  }
  @media (min-width: 320px) {
  }
  @media (min-width: 576px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
  }
.flex-vcenter{
align-items:center;
display:flex;
flex-direction:row;
}
.white-color {
  color: #fff;
}
.mouse-pointer{
  cursor:pointer;
}
`;

export const GlobalStyles = (props) => <Global {...props} styles={GlobalCSS} />;
