import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import styled from "styled-components";

import Background from "../../assets/webroot/img/index/backimage.png";
import AddressSrc from "../../assets/webroot/img/front/location_ins.png";
import { colors } from "../../core/constants/styleguide.const";
import SubTitle from "../sub-title/SubTitle";
import { RESPONSIVE } from "../../core/constants/responsive.const";
const PhotoOnlyPage = () => {
  return (
    <Container>
        <img src={Background} alt=""></img>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default PhotoOnlyPage;
