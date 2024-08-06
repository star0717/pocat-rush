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
