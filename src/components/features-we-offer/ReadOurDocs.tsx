import React, { useRef, useEffect } from "react";
import { styled } from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SubTitle from "../sub-title/SubTitle";
import { RESPONSIVE } from "../../core/constants/responsive.const";
import { colors } from "../../core/constants/styleguide.const";
import { ButtonPrimarySmall, H1, H4 } from "../styleguide/styleguide";
import Doc from "./children/Docs";
import DocImage from "../../assets/webroot/img/index/doc_image.png";
import Dashboard from "../../assets/webroot/img/front/icn_fet_1.png";
import Messaging from "../../assets/webroot/img/front/icn_fet_2.png";
import Transactions from "../../assets/webroot/img/front/icn_fet_3.png";
import Responsive from "../../assets/webroot/img/front/icn_fet_4.png";
import Invoicing from "../../assets/webroot/img/front/icn_fet_5.png";
import Company from "../../assets/webroot/img/front/icn_fet_6.png";

const ReadOurDocs = () => {
  const elemRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const elems = Array.from(
      document.querySelectorAll(".gs_reveal")
    ) as HTMLElement[];

    elems.forEach((elem) => {
      hide(elem); // assure that the element is hidden when scrolled into view

      ScrollTrigger.create({
        trigger: elem,
        markers: false,
        onEnter: () => animateFrom(elem),
        onEnterBack: () => animateFrom(elem, -1),
        onLeave: () => hide(elem),
      });
    });
  }, []);
  const animateFrom = (elem: HTMLElement, direction = 1) => {
    let x = 0;
    let y = direction * 100;

    if (elem.classList.contains("gs_reveal_fromLeft")) {
      x = -100;
      y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
      x = 100;
      y = 0;
    }

    elem.style.transform = `translate(${x}px, ${y}px)`;
    elem.style.opacity = "0";

    gsap.fromTo(
      elem,
      { x, y, autoAlpha: 0 },
      {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto",
      }
    );
  };

  const hide = (elem: HTMLElement) => {
    gsap.set(elem, { autoAlpha: 0 });
  };

  return (
    <Container ref={elemRef}>
      <StyledDiv>
        <StyledHeader>{`READ OUR DOCUMENTS`}</StyledHeader>
        <StyledDescription>
          {`Here is our full docments that help you to understand`}{" "}
          {`deeply about us and our operation`}
        </StyledDescription>
      </StyledDiv>
      <MainTips>
        <Doc className={`gs_reveal`} icon={DocImage} title={`WHITEPAPER`} />
        <Doc
          className={`gs_reveal`}
          icon={DocImage}
          title={`TOKEN SALE TERMS`}
        />
        <Doc className={`gs_reveal`} icon={DocImage} title={`PRESENTATION`} />
        <Doc className={`gs_reveal`} icon={DocImage} title={`LIGHTPAPER`} />
      </MainTips>
      <StyledButton>{`Download all`}</StyledButton>
    </Container>
  );
};

const Container = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primaryYellow};
  gap: 50px;
  height: 100%;
  margin-bottom: 50px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const StyledHeader = styled.h1`
  font-size: 37.9px;
  line-height: 42.64px;
  font-weight: 800;
  font-family: System-ui;
  color: ${colors.mainColor};
`;

const StyledDescription = styled.p`
  font-size: 16px;
  line-height: 24px;
  align: center;
  color: ${colors.mainColor};
`;

const MainTips = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  align-items: center;
  @media screen and (min-width: ${RESPONSIVE.small}) {
    flex-direction: row;
  }
  @media screen and (min-width: ${RESPONSIVE.tablet}) {
    width: 80%;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const StyledButton = styled(ButtonPrimarySmall)`
  border-radius: 0px;
  font-size: 16px;
  border: solid 1px ${colors.mainColor};
  height: 54px;
  width: 189px;
  background: ${colors.primaryYellow};
  font-family: ABeezee;
  color: ${colors.mainColor};
  font-size: 20px;
`;

export default ReadOurDocs;
