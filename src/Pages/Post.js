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
import { useParams } from "react-router-dom";
import { urlGetPost } from "../API/api";
import { useEffect } from "react";

function Post() {
  const { postId } = useParams();

  async function getPostByPostId() {
    try {
      let response = await urlGetPost(postId);
      console.log("urlGetPost : ", response.data);
    } catch (error) {
      console.log("에러발생 : ", error);
    }
  }
  useEffect(() => {
    getPostByPostId();
  }, []);

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
      </Wrapper>
      <Wrapper alContent={`center`} dr={`column`}>
        <Wrapper ju={`flex-end`} maxWidth={`1440px`}></Wrapper>
        <MainTableWrapper></MainTableWrapper>
      </Wrapper>
      <Footer />
    </>
  );
}
export default Post;
