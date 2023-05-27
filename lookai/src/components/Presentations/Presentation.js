import React from "react";
import Icon1 from "../../images/undraw_presentation_re_sxof.svg";
import {
  ServicesH1,
  ServicesH2,
  ServicesContainer,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  Servicesp,
} from "./PresentationElements.js";
import { Buttong } from "../ButtonElements";
import { Link } from "react-router-dom";

const Presentations = () => {
  return (
    <ServicesContainer id="presentation">
      <ServicesH1>Presentations</ServicesH1>
      <ServicesWrapper>
        <ServicesCard data-aos="fade-up">
          <ServicesIcon src={Icon1} />
          <div style={{ height: "40px", marginBottom: "30px" }}>
            <ServicesH2>Project Proposal</ServicesH2>
          </div>

          <Buttong
            to="https://drive.google.com/drive/folders/1mv8iIPrCaAEM6tNasMkhWTIhHVq5xgJx?usp=sharing"
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            style={{ textDecoration: "none" }}
          >
            View
          </Buttong>
        </ServicesCard>

        <ServicesCard data-aos="fade-up">
          <ServicesIcon src={Icon1} />
          <div style={{ height: "40px", marginBottom: "30px" }}>
            <ServicesH2>Progress Presentation I</ServicesH2>
          </div>
          <Buttong
            to="https://drive.google.com/drive/folders/17PSyYuOO4xNzfcDu8ATxKjeFVk8LVtQR?usp=sharing"
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            style={{ textDecoration: "none" }}
          >
            View
          </Buttong>
        </ServicesCard>

        <ServicesCard data-aos="fade-up">
          <ServicesIcon src={Icon1} />
          <div style={{ height: "40px", marginBottom: "30px" }}>
            <ServicesH2>Progress Presentation II</ServicesH2>
          </div>
          <Buttong
            to="https://drive.google.com/drive/folders/1aKtCviVw2QFmZkDf-bB1Am4Wf4C-xOlY?usp=sharing"
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            style={{ textDecoration: "none" }}
          >
            View
          </Buttong>
        </ServicesCard>

        <ServicesCard data-aos="fade-up">
          <ServicesIcon src={Icon1} />
          <div style={{ height: "40px", marginBottom: "30px" }}>
            <ServicesH2>Final Presentation</ServicesH2>
          </div>
          <Buttong
            to="https://drive.google.com/drive/folders/1IV2d_1bGeQ3drVSLcHGWodLOULUbRQlA?usp=drive_link"
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            style={{ textDecoration: "none" }}
          >
            View
          </Buttong>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Presentations;
