import { userLogout } from "../API/api";
import {
  Wrapper,
  Text,
  HeaderText,
  StyledLink,
  Image,
} from "../Style/StyledComponents";

function Header() {
  return (
    <>
      <Wrapper
        // isAbsolute
        // zIndex={`100`}
        ju={`center`}
        // bgColor={` rgb(255,255,255,0.6);`}
        bgColor={`#fff`}
      >
        <StyledLink to={"/"}>
          <Image
            src="/images/pocatLogo.png"
            width={`180px`}
            padding={`14px 0 0`}
          />
        </StyledLink>
        <Wrapper ju={`flex-end`} padding={`0px 74px 10px`}>
          {/* 0809 승환 로그아웃 추가 (로그인이 되어있다면 hidden속성 추가 요망) */}
          <HeaderText padding={`0px 32px`} isSmall>
            <StyledLink to={"/Login"}>로그인</StyledLink>
          </HeaderText>
          <HeaderText padding={`0px 32px`} isSmall>
            <StyledLink
              onClick={() => {
                userLogout();
              }}
            >
              로그아웃
            </StyledLink>
          </HeaderText>
          <HeaderText padding={`0px 32px`} isSmall>
            <StyledLink to={"/Join"}>회원가입</StyledLink>
          </HeaderText>
        </Wrapper>
        <Wrapper ju={`center`} bgColor={`#242424`}>
          <HeaderText padding={`14px 74px`}>
            <StyledLink isWhite to={"/WhatsNew"}>
              What's New
            </StyledLink>
          </HeaderText>
          <HeaderText padding={`14px 74px`}>
            <StyledLink isWhite to={"/Ranking"}>
              랭킹
            </StyledLink>
          </HeaderText>
          <HeaderText padding={`14px 74px`}>
            <StyledLink isWhite to={"/Community"}>
              커뮤니티
            </StyledLink>
          </HeaderText>
          <HeaderText padding={`14px 74px`}>
            <StyledLink isWhite to={"/MyPage"}>
              마이페이지
            </StyledLink>
          </HeaderText>
        </Wrapper>
      </Wrapper>
    </>
  );
}

export default Header;
