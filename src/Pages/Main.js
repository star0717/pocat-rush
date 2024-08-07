import { useEffect, useState } from "react";
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
import axios from "axios";

function Main() {
  const [authority, setAuthority] = useState(null);

  // 0807 승환 api 테스트
  // async function getAuthority() {
  //   try {
  //     let response = await urlGetAllAuthority();
  //     console.log("데이터 : ", response.data);

  //   } catch (error) {
  //     console.log("에러 : ", error);
  //   }
  // }

  // useEffect(() => {
  //   getAuthority();
  // }, []);

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
