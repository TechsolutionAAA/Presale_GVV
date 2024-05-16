import { Else, If, Then } from "react-if";
import { styled } from "styled-components";

import { colors } from "../../../core/constants/styleguide.const";
import { useWatchResize } from "../../../core/hooks/useWatchResize";

interface Props {
  className: string;
  order: number;
  guideTitle: string;
  guideContent: string;
  isEnd: boolean;
}

const Step = (props: Props) => {
  const { className, order, guideTitle, guideContent, isEnd } = props;
  const coordinate = order % 2 === 1 ? true : false;

  const { smallerThanTablet } = useWatchResize();

  return (
    <If condition={smallerThanTablet}>
      <Then>
        <Container className={className}>
          <MiddleSection className={isEnd ? "" : "isNotEnd"}>
            <MiddleBarCircle>
              <StyledOrder>{order}</StyledOrder>
            </MiddleBarCircle>
            {!isEnd && <MiddleBar />}
          </MiddleSection>
          <Children style={{ width: "80%" }}>
            <GuideTitle>{guideTitle}</GuideTitle>
            <GuideContent>{guideContent}</GuideContent>
          </Children>
        </Container>
      </Then>
      <Else>
        <If condition={coordinate}>
          <Then>
            <Container className={className}>
              <LeftBlankDiv />
              <MiddleSection className={isEnd ? "" : "isNotEnd"}>
                <MiddleBarCircle>
                  <StyledOrder>{order}</StyledOrder>
                </MiddleBarCircle>
                {!isEnd && <MiddleBar />}
              </MiddleSection>
              <Children>
                <GuideTitle>{guideTitle}</GuideTitle>
                <GuideContent>{guideContent}</GuideContent>
              </Children>
            </Container>
          </Then>
          <Else>
            <Container className={className}>
              <Children style={{ textAlign: "right" }}>
                <GuideTitle>{guideTitle}</GuideTitle>
                <GuideContent>{guideContent}</GuideContent>
              </Children>
              <MiddleSection className={isEnd ? "" : "isNotEnd"}>
                <MiddleBarCircle>
                  <StyledOrder>{order}</StyledOrder>
                </MiddleBarCircle>
                {!isEnd && <MiddleBar />}
              </MiddleSection>
              <RightBlankDiv />
            </Container>
          </Else>
        </If>
      </Else>
    </If>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const LeftBlankDiv = styled.div`
  width: 45%;
  height: auto;
`;

const RightBlankDiv = styled.div`
  width: 45%;
  height: auto;
`;

const Children = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
`;

const MiddleSection = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &.isNotEnd {
    justify-content: center;
  }
`;

const MiddleBar = styled.div`
  width: 5px;
  height: 100%;
  background-color: ${colors.middleBlue};
`;

const StyledOrder = styled.h1`
  font-size: 30px;
  color: ${colors.neutrals3};
`;

const MiddleBarCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  border: 5px solid ${colors.middleBlue};
`;

const GuideContent = styled.h1`
  font-size: 15px;
  font-weight: 400;
  color: ${colors.neutrals4};
`;

const GuideTitle = styled.h1`
  font-size: 17px;
  color: ${colors.neutrals3};
`;
export default Step;
