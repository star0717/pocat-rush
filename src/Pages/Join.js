import Footer from "../Components/Footer";
import Header from "../Components/Header";
import {
  JoinInput,
  JoinInputWrapper,
  JoinSelect,
  JoinText,
  Option,
  PocatRushButton,
  SubPageTitle,
  SubPageTitleDesc,
  SubPageTitleWrapper,
  Wrapper,
} from "../Style/StyledComponents";

function Join() {
  return (
    <>
      <Wrapper>
        <Header />
        <SubPageTitleWrapper>
          <SubPageTitle>회원가입</SubPageTitle>
          <SubPageTitleDesc>
            지금 바로 회원가입하고 즐거운 포켓러쉬의 세계에 빠져보세요.
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
          <JoinInputWrapper>
            <JoinText>이름</JoinText>
            <JoinInput placeholder="이름을 입력해주세요" />
          </JoinInputWrapper>
          <JoinInputWrapper>
            <JoinText>성별</JoinText>
            <JoinSelect>
              <Option>선택안함</Option>
              <Option>여성</Option>
              <Option>남성</Option>
            </JoinSelect>
          </JoinInputWrapper>
          <JoinInputWrapper>
            <JoinText>이메일</JoinText>
            <Wrapper ju={`space-between`} width={`auto`} minWidth={`418px`}>
              <JoinInput placeholder="이메일을 입력해주세요" width={`188px`} />
              <JoinSelect width={`198px`}>
                <Option>선택안함</Option>
                <Option>gmail.com</Option>
                <Option>naver.com</Option>
                <Option>nate.com</Option>
                <Option>hanmail.net</Option>
                <Option>hotmail.com</Option>
              </JoinSelect>
            </Wrapper>
          </JoinInputWrapper>
          <PocatRushButton margin={`40px 0 0`}>다음</PocatRushButton>
        </Wrapper>
        <Footer />
      </Wrapper>
    </>
  );
}

export default Join;
