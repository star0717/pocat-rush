import { useEffect, useState } from "react";
import { urlPostWhatsNew } from "../API/api";
import Footer from "../Components/Footer";
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
import { HiSearch } from "react-icons/hi";

function WhatsNew() {
  const [data, setData] = useState(null);

  async function whatsNews() {
    try {
      let response = await urlPostWhatsNew();
      console.log("데이터 : ", response.data);
      setData(response.data);
    } catch (error) {
      console.log("에러 : ", error);
    }
  }
  useEffect(() => {
    whatsNews();
  }, []);

  return (
    <>
      <Wrapper>
        <Header />
        <SubPageTitleWrapper bgImg={`url("images/subBanner01.png")`}>
          <SubPageTitle>What's New</SubPageTitle>
          <SubPageTitleDesc>
            포켓러쉬의 새로운 소식을 확인할 수 있습니다.
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
          {data &&
            data.map((data) => (
              <MainTableTr>
                <MainTableTd width={`15%`}>{data.postId}</MainTableTd>
                <MainTableTd width={`50%`}>{data.postTitle}</MainTableTd>
                <MainTableTd width={`15%`}>{data.user.userId}</MainTableTd>
                <MainTableTd width={`20%`}>{data.postDate}</MainTableTd>
              </MainTableTr>
            ))}
        </MainTableWrapper>
      </Wrapper>
      <Footer />
    </>
  );
}
export default WhatsNew;
