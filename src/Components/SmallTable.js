import {
  SmallTablePlusButton,
  SmallTableTd,
  SmallTableTr,
  SmallTableWrapper,
  Text,
  Wrapper,
} from "../Style/StyledComponents";

function SmallTable() {
  return (
    <Wrapper>
      <Wrapper ju={`center`}>
        <Wrapper dr={`column`} width={`650px`} margin={`20px 70px`}>
          <Wrapper dr={`column`} padding={`20px 0`}>
            <Wrapper al={`center`} margin={`0 0 10px 0`}>
              <Text fontSize={`22px`} fontWeight={`800`}>
                What's New
              </Text>
              <SmallTablePlusButton>+</SmallTablePlusButton>
            </Wrapper>
            <Text fontSize={`14px`}>포켓러쉬의 새 소식을 확인해보세요</Text>
          </Wrapper>
          <SmallTableWrapper>
            <SmallTableTr>
              <SmallTableTd>I'm Title01</SmallTableTd>
              <SmallTableTd>2024-08-06</SmallTableTd>
            </SmallTableTr>
            <SmallTableTr>
              <SmallTableTd>I'm Title02</SmallTableTd>
              <SmallTableTd>2024-08-06</SmallTableTd>
            </SmallTableTr>
            <SmallTableTr>
              <SmallTableTd>I'm Title03</SmallTableTd>
              <SmallTableTd>2024-08-06</SmallTableTd>
            </SmallTableTr>
          </SmallTableWrapper>
        </Wrapper>
        <Wrapper dr={`column`} width={`650px`} margin={`20px 70px`}>
          <Wrapper dr={`column`} padding={`20px 0`}>
            <Wrapper al={`center`} margin={`0 0 10px 0`}>
              <Text fontSize={`22px`} fontWeight={`800`}>
                자유게시판
              </Text>
              <SmallTablePlusButton>+</SmallTablePlusButton>
            </Wrapper>
            <Text fontSize={`14px`}>
              유저들과 자유롭게 이야기를 나누어보세요!
            </Text>
          </Wrapper>
          <SmallTableWrapper>
            <SmallTableTr>
              <SmallTableTd>I'm Title01</SmallTableTd>
              <SmallTableTd>2024-08-06</SmallTableTd>
            </SmallTableTr>
            <SmallTableTr>
              <SmallTableTd>I'm Title02</SmallTableTd>
              <SmallTableTd>2024-08-06</SmallTableTd>
            </SmallTableTr>
            <SmallTableTr>
              <SmallTableTd>I'm Title03</SmallTableTd>
              <SmallTableTd>2024-08-06</SmallTableTd>
            </SmallTableTr>
          </SmallTableWrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
}

export default SmallTable;
