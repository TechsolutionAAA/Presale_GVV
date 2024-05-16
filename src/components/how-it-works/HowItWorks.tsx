import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { styled } from "styled-components";

import { RESPONSIVE } from "../../core/constants/responsive.const";
import SubTitle from "../sub-title/SubTitle";
import Step from "./children/Step";
import { stepsData } from "./children/Steps.const";

const HowItWorks = () => {
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
    // gsap.set(elem, { autoAlpha: 0 });
  };

  return (
    <Container ref={elemRef}>
      <SubTitle subtitle={`HOW IT WORKS`} isWhite={true} />
      <MainTips>
        {stepsData.map((data, index) => (
          <Step
            key={index}
            className={`gs_reveal`}
            order={index + 1}
            guideTitle={data.title}
            guideContent={data.description}
            isEnd={index === stepsData.length - 1 ? true : false}
          />
        ))}
      </MainTips>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  /* height: 100%; */
  height: 1000px;
  margin-bottom: 50px;
`;

const MainTips = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: ${RESPONSIVE.tablet}) {
    width: 80%;
  }
`;

export default HowItWorks;
