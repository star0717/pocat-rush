import { HiSearch } from "react-icons/hi";
import Header from "../Components/Header";
import {
  MainTableTd,
  MainTableTr,
  MainTableWrapper,
  SearchInput,
  SearchInputWrapper,
  SubPageTitle,
  SubPageTitleDesc,
  SubPageTitleWrapper,
  Wrapper,
} from "../Style/StyledComponents";
import Footer from "../Components/Footer";

function Community() {
  return (
    <>
      <Wrapper>
        <Header />
        <SubPageTitleWrapper>
          <SubPageTitle>커뮤니티</SubPageTitle>
          <SubPageTitleDesc>
            포켓러쉬 유저들과 자유롭게 소통할 수 있습니다.
          </SubPageTitleDesc>
        </SubPageTitleWrapper>
      </Wrapper>
      <Wrapper alContent={`center`} dr={`column`}>
        <Wrapper ju={`flex-end`} maxWidth={`1440px`}>
          <SearchInputWrapper>
            <SearchInput placeholder="검색어를 입력해주세요." />
            <HiSearch />
          </SearchInputWrapper>
        </Wrapper>
        <MainTableWrapper>
          <MainTableTr isHead>
            <MainTableTd width={`15%`}>NO</MainTableTd>
            <MainTableTd width={`50%`}>제목</MainTableTd>
            <MainTableTd width={`15%`}>작성자</MainTableTd>
            <MainTableTd width={`20%`}>작성일</MainTableTd>
          </MainTableTr>
          <MainTableTr>
            <MainTableTd width={`15%`}>1</MainTableTd>
            <MainTableTd width={`50%`}>Hello I'm Title</MainTableTd>
            <MainTableTd width={`15%`}>Unknown</MainTableTd>
            <MainTableTd width={`20%`}>2024-08-07</MainTableTd>
          </MainTableTr>
        </MainTableWrapper>
      </Wrapper>
      <Footer />
    </>
  );
}
export default Community;
