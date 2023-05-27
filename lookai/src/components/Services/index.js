import React from 'react';
import Icon1 from '../../images/undraw_google_docs_re_evm3.svg'
import {
         ServicesH1,
         ServicesH2,
         ServicesContainer,
         ServicesWrapper,
         ServicesCard,
         ServicesIcon,
         Servicesp
} from './ServiceElements';
import { Buttong } from '../ButtonElements';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
      <ServicesContainer id="services">
        <ServicesH1>Documents</ServicesH1>
        <ServicesWrapper>
          <ServicesCard data-aos="fade-up">
            <ServicesIcon src={Icon1} />
            <ServicesH2>Topic Assessment</ServicesH2>

            <Buttong
              to="https://drive.google.com/drive/folders/1LIv1KXBx3eDsgn3ObvXon-SNzx-t09vJ?usp=sharing"
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
            <ServicesH2>Project Charter</ServicesH2>

            <Buttong
              to="https://drive.google.com/drive/folders/1EDmR-Cp1o-__OwnPrjK1WAiJcPd2K5Cq?usp=sharing"
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
            <ServicesH2>Project Proposal</ServicesH2>

            <Buttong
              to="https://drive.google.com/drive/folders/11xus-zYR7cbbsLaEuYLYjy3kYLLJzOwl?usp=drive_link"
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
            <ServicesH2>Status Document I</ServicesH2>

            <Buttong
              to="https://drive.google.com/drive/folders/1o63zxrAnWaCSqgo8Q9jLutXVRChgRMjZ?usp=sharing"
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
            <ServicesH2>Status Document II</ServicesH2>
            <Buttong
              to="https://drive.google.com/drive/folders/1yMkUwFN-bLo2wgQhP272s5bH9E4PdM9k?usp=sharing"
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
            <ServicesH2>Research Paper</ServicesH2>
            <Buttong
              to="https://drive.google.com/drive/folders/1AyfytKPNNJ9p_emvPV98gRDPmU6E81FF?usp=sharing"
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
            <ServicesH2>Final Report</ServicesH2>
            <Buttong
              to="https://drive.google.com/drive/folders/1fBkbGBWej-KyJ7Vboqb4v6tRIWogpTDv?usp=sharing"
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
            <ServicesH2>Poster</ServicesH2>
            <Buttong
              to="https://drive.google.com/drive/folders/12ue_pmRtwQAO8zzjkafDUkNyKNw9UMx3?usp=drive_link"
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
}

export default Services
