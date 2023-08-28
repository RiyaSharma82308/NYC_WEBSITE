import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";
import "./Testimonialscarousel.css";
import UAParser from "ua-parser-js";
import React, { Fragment } from "react";
import Simple2 from './simple2';
import Section from './section';

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Testimonialscarousel = ({ deviceType }) => {
  return (
    <Fragment>
      <Section>
        <Simple2 deviceType={deviceType} />
      </Section>
    </Fragment>
  );
};
Testimonialscarousel.getInitialProps = ({ req }) => {
  let userAgent;
  if (req) {
    userAgent = req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }
  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || "desktop";
  return { deviceType };
};
export default Testimonialscarousel;
