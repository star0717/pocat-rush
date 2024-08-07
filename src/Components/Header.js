import {
  Wrapper,
  Text,
  HeaderText,
  StyledLink,
} from "../Style/StyledComponents";

function Header(color) {
  return (
    <>
      <Wrapper isAbsolute zIndex={`100`} ju={`center`}>
        <Text padding={`20px 0 0`}>
          <StyledLink to={"/"}>Pocat Rush</StyledLink>
        </Text>
        <Wrapper ju={`flex-end`} padding={`10px 74px`}>
          <HeaderText padding={`10px 32px`} isSmall>
            로그인
          </HeaderText>
          <HeaderText padding={`10px 32px`} isSmall>
            회원가입
          </HeaderText>
        </Wrapper>
        <Wrapper ju={`center`}>
          <HeaderText padding={`10px 74px`}>
            <StyledLink to={"/WhatsNew"}>What's New</StyledLink>
          </HeaderText>
          <HeaderText padding={`10px 74px`}>
            <StyledLink to={"/Ranking"}>랭킹</StyledLink>
          </HeaderText>
          <HeaderText padding={`10px 74px`}>
            <StyledLink to={"/Community"}>커뮤니티</StyledLink>
          </HeaderText>
          <HeaderText padding={`10px 74px`}>
            <StyledLink to={"/MyPage"}>마이페이지</StyledLink>
          </HeaderText>
        </Wrapper>
      </Wrapper>
    </>
  );
}

export default Header;
