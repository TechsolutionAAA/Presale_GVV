import { LinearProgress } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import { Else, If, Then } from "react-if";
import { styled } from "styled-components";

import GVVIndex from "../../components/gvvindex/GVVIndex";
import OverviewIndex from "../../components/gvv-overview/overviewIndex";
import Header from "../../components/header/Header";
import HowItWorks from "../../components/how-it-works/HowItWorks";
import AboutStafir from "../../components/about-stafir/AboutStafir";
import ReadOurDocs from "../../components/features-we-offer/ReadOurDocs";
import AndroidAndIosApp from "../../components/android-ios-app/AndroidAndIosApp";
import ContactInformation from "../../components/contact-information/ContactInformation";
import Footer from "../../components/footer/Footer";
import { colors } from "../../core/constants/styleguide.const";
import PhotoOnlyPage from "../../components/photo-only-page/PhotoOnlyPage";
import Faqs from "../../components/faqs/Faqs";
// const Header = lazy(() => import("../../components/header/Header"));

const Home = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 100 : (prevProgress += 10)
      );
    }, 40);

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
              {/* <GVVIndex /> */}
              <OverviewIndex />
              {/* <HowItWorks /> */}
              {/* <AboutStafir /> */}
              <ReadOurDocs />
              {/* <AndroidAndIosApp /> */}
              {/* <PhotoOnlyPage /> */}
              <Faqs />
              <ContactInformation />
              {/* <Footer /> */}
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
  background-color: ${colors.mainColor};
`;

const LoaderSection = styled.div`
  padding: 200px 100px;
  margin-bottom: 1000px;
`;

const MainPageSection = styled.div`
  opacity: 0;
  transition: opacity 1s ease-in-out;
  &.isNotLoading {
    opacity: 1;
  }
`;

export default Home;
