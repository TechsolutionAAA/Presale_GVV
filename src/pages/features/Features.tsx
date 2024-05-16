import { LinearProgress } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import { Else, If, Then } from "react-if";
import { styled } from "styled-components";

import FeaturesComponent from "../../components/features-components/FeaturesComponent";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { featuresData } from "./const/FeaturesData.const";
// const Header = lazy(() => import("../../components/header/Header"));

const Features = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  gsap.registerPlugin(ScrollTrigger);

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
            <MainPageSection className={isLoading ? "" : "isNotLoading"}>
              {featuresData.map((data, index) => (
                <FeaturesComponent 
                  key={index}
                  subtitle={data.subtitle}
                  title={data.title}
                  description={data.description}
                  imgSrc={data.imgSrc}
                  isWhite={index % 2 === 0 ? true: false}
                />
              ))}
              <Footer />
            </MainPageSection>
          </Else>
        </If>
      </Content>
    </>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
`;

const LoaderSection = styled.div`
  padding: 200px 100px;
`;

const MainPageSection = styled.div`
  opacity: 0;
  transition: opacity 1s ease-in-out;
  &.isNotLoading {
    opacity: 1;
  }
`;

export default Features;
