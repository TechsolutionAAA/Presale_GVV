import React from "react";
import { styled } from "styled-components";
import { colors } from "../../core/constants/styleguide.const";
import { ButtonPrimarySmall, H4 } from "../styleguide/styleguide";
import Faq from "./children/Faq";

const Faqs = () => {
  return (
    <Container>
      <StyledDiv>
        <Title>{`FAQS`}</Title>
        <DescriptionDiv>
          <Description>{`Meet the dedicated team behind Crypteck. Together, they work tirelessly to lay the foundation for a unique metavers.`}</Description>
        </DescriptionDiv>
        <FaqsPart>
          <Faq
            title={`What is ICO?`}
            description={`Pretium mauris viverra eget nulla eu auctor scelerisque risus. Ornare morbi pulvinar ipsum gravida rutrum. Aliquam aliquet ac vitae pellentesque lectus elementum. Nunc mus et, pulvinar facilisi viverra. At amet mauris fermentum sed. Aliquam ut rhoncus et semper non purus massa risus. Tristique mattis in sed dictum cursus eu lorem placerat.`}
          ></Faq>
          <Faq
            title={`What cryptocurrencies I use to purchase?`}
            description={`Pretium mauris viverra eget nulla eu auctor scelerisque risus. Ornare morbi pulvinar ipsum gravida rutrum. Aliquam aliquet ac vitae pellentesque lectus elementum. Nunc mus et, pulvinar facilisi viverra. At amet mauris fermentum sed. Aliquam ut rhoncus et semper non purus massa risus. Tristique mattis in sed dictum cursus eu lorem placerat.`}
          ></Faq>
          <Faq
            title={`How do I benefit from the ICO?`}
            description={`Pretium mauris viverra eget nulla eu auctor scelerisque risus. Ornare morbi pulvinar ipsum gravida rutrum. Aliquam aliquet ac vitae pellentesque lectus elementum. Nunc mus et, pulvinar facilisi viverra. At amet mauris fermentum sed. Aliquam ut rhoncus et semper non purus massa risus. Tristique mattis in sed dictum cursus eu lorem placerat.`}
          ></Faq>
        </FaqsPart>
        <div
          style={{ alignContent: "right", width: "100%", marginTop: "20px" }}
        >
          <StyledShowMoreButton>{`Show more`}</StyledShowMoreButton>
        </div>
      </StyledDiv>
    </Container>
  );
};

const Container = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 546px;
  @media (max-width: 800px) {
    font-size: 20px;
    width: 290px;
  }
`;

const Title = styled.h1`
  font-size: 38px;
  line-height: 43px;
  font-family: ABeeZee;
  color: ${colors.neutrals8};
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-family: ABeeZee;
  color: ${colors.neutrals4};
  text-align: center;
`;

const FaqsPart = styled.div`
  margin-top: 50px;
  border-bottom: solid 2px ${colors.neutrals8};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 856px;
  @media (max-width: 800px) {
    font-size: 20px;
    width: 500px;
  }
  @media (max-width: 500px) {
    font-size: 20px;
    width: 290px;
  }
`;

const StyledShowMoreButton = styled(H4)`
  color: ${colors.neutrals8};
  font-family: ABeeZee;
  font-size: 16px;
  line-height: 24px;
  &:hover {
    color: ${colors.primaryYellow};
    cursor: pointer;
  }
`;
export default Faqs;
