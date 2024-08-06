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
      {/* <Wrapper bgColor={`#000`} margin={`500px 0 0`}>
        dlkfsl
      </Wrapper> */}
    </>
  );
}
export default WhatsNew;
