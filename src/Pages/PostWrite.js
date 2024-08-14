import Header from "../Components/Header";
import {
  MainTableWrapper,
  PostWriteInput,
  PostWriteText,
  PostWriteWrapper,
  SubPageTitle,
  SubPageTitleDesc,
  SubPageTitleWrapper,
  Wrapper,
} from "../Style/StyledComponents";
import Footer from "../Components/Footer";

function PostWrite() {
  return (
    <>
      <Wrapper>
        <Header />
        <SubPageTitleWrapper bgImg={`url("images/subBanner01.png")`}>
          <SubPageTitle>커뮤니티</SubPageTitle>
          <SubPageTitleDesc>
            포켓러쉬 유저들과 자유롭게 소통할 수 있습니다.
          </SubPageTitleDesc>
        </SubPageTitleWrapper>

        <Wrapper>
          <PostWriteWrapper>
            <PostWriteText>제목</PostWriteText>
            <PostWriteInput placeholder="글 제목을 입력해주세요" />
          </PostWriteWrapper>
          <PostWriteWrapper>
            <PostWriteText>내용</PostWriteText>
            <PostWriteInput placeholder="내용을 입력해주세요" />
          </PostWriteWrapper>
        </Wrapper>
      </Wrapper>
      <Wrapper alContent={`center`} dr={`column`}>
        <Wrapper ju={`flex-end`} maxWidth={`1440px`}></Wrapper>
        <MainTableWrapper></MainTableWrapper>
      </Wrapper>
      <Footer />
    </>
  );
}
export default PostWrite;
