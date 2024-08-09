import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import GameInformation from "../Components/GameInformation";
import Header from "../Components/Header";
import Profile from "../Components/Profile";
import SmallTable from "../Components/SmallTable";
import {
  GameStartButton,
  Image,
  SmallTableTd,
  SmallTableTr,
  SmallTableWrapper,
  Text,
  Wrapper,
} from "../Style/StyledComponents";
import {
  sessionCurrent,
  userJwtLogin,
  userLogin,
  userLogout,
} from "../API/api";

function Main() {
  useEffect(() => {
    sessionCurrent();
  }, []);
  return (
    <>
      <Header />
      <Wrapper ju={`center`} al={`flex-end`} dr={`column`}>
        <Image src="/images/testBanner.png" />
        <Wrapper dr={`column`} al={`flex-end`} isAbsolute top={`32%`}>
          <GameStartButton>GAME START</GameStartButton>
          <Profile />
        </Wrapper>
      </Wrapper>

      <SmallTable />
      <GameInformation />
      <Footer />
    </>
  );
}

export default Main;
