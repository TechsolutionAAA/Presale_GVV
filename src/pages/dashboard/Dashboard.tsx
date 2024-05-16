import { LinearProgress } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import { Else, If, Then } from "react-if";
import { styled } from "styled-components";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SubTitle from "../../components/sub-title/SubTitle";
import { RESPONSIVE } from "../../core/constants/responsive.const";

const Dashboard = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 100 : (prevProgress += 10)
      );
    }, 50);

    if (progress >= 100) {
      clearInterval(timer);
      setIsLoading(false);
    }

    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  return (
    <>
      <Content>
        <Header />
        <If condition={isLoading}>
          <Then>
            <LoaderSection>
              <LinearProgress
                variant="buffer"
                value={progress}
                valueBuffer={progress}
              />
            </LoaderSection>
          </Then>
          <Else>
          </Else>
        </If>
      </Content>
    </>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  @media screen and (min-width: ${RESPONSIVE.small}) {
    margin-top: 50px;
  }
`;

const SubtitleSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  @media screen and (min-width: ${RESPONSIVE.small}) {
    width: 50%;
  }
`;

const LoaderSection = styled.div`
  padding: 100px 0;
  width: 80%;
`;

const MainPageSection = styled.div`
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 1s ease-in-out;
  &.isNotLoading {
    opacity: 1;
  }
  gap: 20px;
`;

const StepsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Dashboard;
