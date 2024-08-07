import Header from "../Components/Header";
import {
  SubPageTitle,
  SubPageTitleWrapper,
  Wrapper,
} from "../Style/StyledComponents";

function WhatsNew() {
  return (
    <>
      <Wrapper>
        <Header />
        <SubPageTitleWrapper>
          <SubPageTitle>What's New</SubPageTitle>
        </SubPageTitleWrapper>
      </Wrapper>
      <Wrapper
        width={`200px`}
        height={`60px`}
        border={`1px solid #000`}
      ></Wrapper>
    </>
  );
}
export default WhatsNew;
