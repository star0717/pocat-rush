import { Wrapper, Text, HeaderText } from "../Style/StyledComponents";

function Header() {
  return (
    <>
      <Wrapper isAbsolute zIndex={`100`} ju={`center`}>
        <Text padding={`20px 0 0`}>Pocat Rush</Text>
        <Wrapper ju={`flex-end`} padding={`10px 74px`}>
          <HeaderText padding={`10px 32px`} isSmall>
            로그인
          </HeaderText>
          <HeaderText padding={`10px 32px`} isSmall>
            회원가입
          </HeaderText>
        </Wrapper>
        <Wrapper ju={`center`}>
          <HeaderText padding={`10px 74px`}>What's New</HeaderText>
          <HeaderText padding={`10px 74px`}>랭킹</HeaderText>
          <HeaderText padding={`10px 74px`}>커뮤니티</HeaderText>
          <HeaderText padding={`10px 74px`}>마이페이지</HeaderText>
        </Wrapper>
      </Wrapper>
    </>
  );
}

export default Header;
