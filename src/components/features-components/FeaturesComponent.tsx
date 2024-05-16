import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { Else, If, Then } from "react-if";
import { styled } from "styled-components";

import BlueBackSrc from "../../assets/webroot/img/front/hom_avbout_bg.png";
import WhiteBackSrc from "../../assets/webroot/img/front/repeat_part.png";
import { RESPONSIVE } from "../../core/constants/responsive.const";
import { colors } from "../../core/constants/styleguide.const";
import { useWatchResize } from "../../core/hooks/useWatchResize";
import { ButtonPrimarySmall } from "../styleguide/styleguide";
import SubTitle from "../sub-title/SubTitle";
import PC from "./children/PC";

interface Props {
  subtitle: string;
  title: string;
  description: string;
  imgSrc: string;
  isWhite: boolean;
}

const FeaturesComponent = (props: Props) => {
  const { subtitle, title, description, imgSrc, isWhite } = props;
  const { smallerThanTablet } = useWatchResize();

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
    elem.style.opacity = "1";

    gsap.fromTo(
      elem,
      { x, y, autoAlpha: 1 },
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
    <Container ref={elemRef} isWhite={isWhite}>
      <MainTips>
        <If condition={isWhite || smallerThanTablet}>
          <Then>
            <StyledLeft className={`gs_reveal gs_reveal_fromLeft`}>
              <SubTitle subtitle={subtitle} isWhite={isWhite} className={`gs_reveal`}/>
              <StyledTitle isWhite={isWhite} className={`gs_reveal`}>{title}</StyledTitle>
              <StyledDescription isWhite={isWhite} className={`gs_reveal`}>
                {description}
              </StyledDescription>
              <StyledButton isWhite={isWhite}>{`View`}</StyledButton>
            </StyledLeft>
            <StyledRight className={`gs_reveal gs_reveal_fromRight`}>
              <PC imgSrc={imgSrc}  className={`gs_reveal`}/>
            </StyledRight>
          </Then>
          <Else>
            <StyledRight className={`gs_reveal gs_reveal_fromLeft`}>
              <PC imgSrc={imgSrc}  className={`gs_reveal`}/>
            </StyledRight>
            <StyledLeft className={`gs_reveal gs_reveal_fromRight`}>
              <SubTitle subtitle={subtitle} isWhite={isWhite} className={`gs_reveal`} />
              <StyledTitle isWhite={isWhite} className={`gs_reveal`}>{title}</StyledTitle>
              <StyledDescription isWhite={isWhite} className={`gs_reveal`}>
                {description}
              </StyledDescription>
              <StyledButton isWhite={isWhite}>{`View`}</StyledButton>
            </StyledLeft>
          </Else>
        </If>
      </MainTips>
    </Container>
  );
};

interface ContainerProps {
  isWhite: boolean;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 100%;
  background-image: ${(props) => {
    return props.isWhite ? `url(${WhiteBackSrc})` : `url(${BlueBackSrc})`;
  }};
  background-repeat: no-repeat;
  /* background-repeat: repeat-x; */
  background-size: cover;
  transition: background-size 0.2s ease-in-out;
`;

const MainTips = styled.div`
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: ${RESPONSIVE.tablet}) {
    flex-direction: row;
  }
`;

const StyledLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  @media screen and (min-width: ${RESPONSIVE.tablet}) {
    width: 60%;
    padding: 0px;
  }
`;

const StyledRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0px;
  @media screen and (min-width: ${RESPONSIVE.tablet}) {
    width: 40%;
    padding-top: 100px;
  }
`;

const StyledTitle = styled.h1<ContainerProps>`
  font-size: 20px;
  color: ${(props) => {
    return props.isWhite ? `${colors.neutrals2}` : `${colors.neutrals8}`;
  }};
  text-align: center;
`;

const StyledDescription = styled.h1<ContainerProps>`
  width: 70%;
  line-height: 24px;
  font-size: 15px;
  font-weight: 400;
  color: ${(props) => {
    return props.isWhite ? `${colors.neutrals2}` : `${colors.neutrals8}`;
  }};
  text-align: center;
`;

const StyledButton = styled(ButtonPrimarySmall)<ContainerProps>`
  border-radius: 5px;
  font-size: 16px;
  border: none;
  height: 37px;
  width: 108px;
  background: ${(props) => {
    return props.isWhite ? `${colors.middleBlue}` : `${colors.neutrals8}`;
  }};
  font-family: Calibri;
  color: ${(props) => {
    return !props.isWhite ? `${colors.middleBlue}` : `${colors.neutrals8}`;
  }};
  font-size: 20px;
  margin-top: 50px;
  &:hover {
    background: ${colors.neutrals3};
    color: ${colors.neutrals8};
  }
`;
export default FeaturesComponent;
