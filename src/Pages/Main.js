import { useEffect } from "react";
import Footer from "../Components/Footer";
import GameInformation from "../Components/GameInformation";
import Header from "../Components/Header";
import Profile from "../Components/Profile";
import SmallTable from "../Components/SmallTable";
import {
  GameStartButton,
  SmallTableTd,
  SmallTableTr,
  SmallTableWrapper,
  Text,
  Wrapper,
} from "../Style/StyledComponents";
import { urlGetAllAuthority } from "../API/api";

function Main() {
  // 0807 승환 api 테스트
  async function getAllAuthority() {
    try {
      let response = await urlGetAllAuthority();
      console.log("urlGetAllAuthority : ", response.data);
    } catch (error) {
      console.log("에러발생 :", error);
    }
  }
  useEffect(() => {
    getAllAuthority();
  }, []);
  return (
    <>
      <Header />
      <Wrapper
        height={`100vh`}
        bgColor={`#ccc`}
        ju={`center`}
        al={`flex-end`}
        dr={`column`}
      >
        <GameStartButton>GAME START</GameStartButton>
        <Profile />
      </Wrapper>

      <SmallTable />
      <GameInformation />
      <Footer />
    </>
  );
}

export default Main;
