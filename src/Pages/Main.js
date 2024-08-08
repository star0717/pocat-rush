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
import { sessionCurrent, userLogin } from "../API/api";

function Main() {
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
        <GameStartButton onClick={sessionCurrent}>GAME START</GameStartButton>
        <GameStartButton onClick={userLogin}>GAME START</GameStartButton>
        <Profile />
      </Wrapper>

      <SmallTable />
      <GameInformation />
      <Footer />
    </>
  );
}

export default Main;
