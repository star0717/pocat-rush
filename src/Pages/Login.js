import Footer from "../Components/Footer";
import Header from "../Components/Header";
import {
  JoinInput,
  JoinInputWrapper,
  JoinSelect,
  JoinText,
  Option,
  PocatRushButton,
  StyledLink,
  SubPageTitle,
  SubPageTitleDesc,
  SubPageTitleWrapper,
  Text,
  Wrapper,
} from "../Style/StyledComponents";

function Login() {
  return (
    <>
      <Wrapper>
        <Header />
        <SubPageTitleWrapper>
          <SubPageTitle>로그인</SubPageTitle>
          <SubPageTitleDesc>
            지금 바로 로그인하고 즐거운 포켓러쉬의 세계에 빠져보세요.
          </SubPageTitleDesc>
        </SubPageTitleWrapper>
        <Wrapper dr={`column`} al={`center`} padding={`140px 0`}>
          <JoinInputWrapper>
            <JoinText>아이디</JoinText>
            <JoinInput placeholder="아이디를 입력해주세요" />
          </JoinInputWrapper>
          <JoinInputWrapper>
            <JoinText>비밀번호</JoinText>
            <JoinInput placeholder="비밀번호를 입력해주세요" />
          </JoinInputWrapper>
          <Wrapper
            minWidth={`500px`}
            al={`center`}
            ju={`flex-end`}
            width={`500px`}
          >
            <StyledLink to={"/FindAccess"}>
              <Text
                decoration={`underline`}
                cursor={`pointer`}
                textAlign={`right`}
              >
                아이디 혹은 비밀번호를 잊어버리셨나요?
              </Text>
            </StyledLink>
          </Wrapper>
          <PocatRushButton margin={`40px 0 0`}>로그인하기</PocatRushButton>
        </Wrapper>
        <Footer />
      </Wrapper>
    </>
  );
}

export default Login;
