import { styled } from "styled-components";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { colors } from "../../../core/constants/styleguide.const";
import { RESPONSIVE } from "../../../core/constants/responsive.const";

interface Props {
  className?: string;
  order: number;
  guideTitle: string;
  guideContent: string;
  isEnd: string;
}

const Step = (props: Props) => {
  const { order, guideTitle, guideContent, isEnd } = props;

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
    // gsap.set(elem, { autoAlpha: 0 });
  };

  return (
    <Container className={`gs_reveal`}>
      <MiddleSection className={isEnd === "true" ? "" : "isNotEnd"}>
        <MiddleBarCircle>
          <StyledOrder>{order}</StyledOrder>
        </MiddleBarCircle>
        {isEnd === "false" && <MiddleBar />}
      </MiddleSection>
      <Children>
        <GuideTitle>{guideTitle}</GuideTitle>
        <GuideContent>{guideContent}</GuideContent>
      </Children>
    </Container>
  );
};


const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media screen and (min-width: ${RESPONSIVE.small}) {
    width: 60%;
  }
`;

const Children = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

const MiddleSection = styled.div`
  display: flex;
  flex-direction: column;
  &.isNotEnd {
    justify-content: center;
  }
  align-items: center;
`;

const MiddleBar = styled.div`
  width: 3px;
  height: 100%;
  background-color: ${colors.neutrals4};
`;

const StyledOrder = styled.h1`
  font-size: 30px;
  color: ${colors.neutrals4};
`;

const MiddleBarCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  border: 3px solid ${colors.neutrals4};
`;

const GuideContent = styled.h1`
  font-size: 17px;
  font-weight: 400;
  color: ${colors.neutrals4};
	margin-top: 0px;
	margin-bottom: 30px;
`;

const GuideTitle = styled.h1`
  font-size: 20px;
	line-height: 20px;
  color: ${colors.neutrals3};
	margin-bottom: 5px;
`;

export default Step;
