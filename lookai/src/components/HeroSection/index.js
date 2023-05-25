import React, { useState} from 'react'
import Video from '../../videos/pexels-eren-li-7171506-3840x2160-50fps.mp4'; 
import { Button } from '../ButtonElements'
import { HeroContainer,
         HeroBg,
         VideoBg,
         HeroContent,
         HeroH1,
         HeroP,
         HeroBtnWrapper,
         ArrowForward,
         ArrowRight
          } from './HeroElements';

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = ()=>{
        setHover(!hover)
    }
    return (
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>LOOK AI</HeroH1>
          <HeroP>
            AN AUTONOMOUS INTELLIGENT SYSTEM FOR ENCOUNTER CHALLENGES OF
            VISUALLY IMPAIRED POPULATION
          </HeroP>
          <HeroBtnWrapper>
            <Button
              to="scope"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Get started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    );
};

export default HeroSection;
