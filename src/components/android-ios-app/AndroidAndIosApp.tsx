import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { styled } from "styled-components";

import AppleAppSrc from "../../assets/webroot/img/front/apple_app_icn.png";
import GooglePalySrc from "../../assets/webroot/img/front/google_play_icn.png";
import PhonePictureSrc from "../../assets/webroot/img/front/img_of_app_phone.png";
import { RESPONSIVE } from "../../core/constants/responsive.const";
import { colors } from "../../core/constants/styleguide.const";
import SubTitle from "../sub-title/SubTitle";

const AndroidAndIosApp = () => {const elemRef = useRef<HTMLDivElement>(null);
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
      {/* <StyledLeftSection>
        <SubTitle subtitle={`ANDROID AND IOS APP`} isWhite={true} />
        <Title className={`gs_reveal`}>
          {`Stafir App for Android and iOS.`}<br></br>{`Its Under Construction and will be Coming Soon.`}
        </Title>
        <Content className={`gs_reveal`}>
          {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
        </Content>
        <StyledButtonGroup>
          <GooglePlayButton />
          <AppleAppButton />
        </StyledButtonGroup>
      </StyledLeftSection>
      <StyledRightSection>
        <img className={`gs_reveal`} src={PhonePictureSrc} alt=""></img>
      </StyledRightSection> */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.mainColor};
  background-size: cover;
  padding: 20px 20px;
  gap: 30px;
  height: 1000px;
  @media screen and (min-width: ${RESPONSIVE.large}) {
    justify-content: space-between;
    padding: 20px 200px;
    gap: 100px;
    flex-direction: row;
  }
`;

const StyledLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledRightSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 20px;
  color: ${colors.middleBlue};
`;

const Content = styled.p`
  font-size: 15px;
  font-weight: 400;
  text-align: center;
  line-height: 24px;
  width: 90%;
  color: ${colors.neutrals3};
  margin-bottom: 20px;
`;

const GooglePlayButton = styled.div`
  border-radius: 5px;
  font-size: 16px;
  border: none;
  height: 58px;
  width: 172px;
  border: 1px solid ${colors.neutrals3};
  font-family: Calibri;
  font-size: 20px;
  background: url(${GooglePalySrc});
  background-repeat: no-repeat;
  background-position: center;
  &:hover {
    cursor: pointer;
    background-color: ${colors.neutrals8};
  }
`;

const AppleAppButton = styled.div`
  border-radius: 5px;
  font-size: 16px;
  border: none;
  height: 58px;
  width: 172px;
  border: 1px solid ${colors.neutrals3};
  font-family: Calibri;
  font-size: 20px;
  background: url(${AppleAppSrc});
  background-repeat: no-repeat;
  background-position: center;
  &:hover {
    cursor: pointer;
    background-color: ${colors.neutrals8};
  }
`;

const StyledButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;



export default AndroidAndIosApp;
