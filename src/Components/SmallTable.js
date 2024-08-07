import { useEffect, useState } from "react";
import { urlGetAllAuthority, urlGetAllUser } from "../API/api";
import {
  SmallTablePlusButton,
  SmallTableTd,
  SmallTableTr,
  SmallTableWrapper,
  Text,
  Wrapper,
} from "../Style/StyledComponents";

function SmallTable() {
  const [user, setUser] = useState("");
  async function getAllUser() {
    try {
      let response = await urlGetAllUser();
      console.log("데이터 : ", response.data);
      setUser(response.data);
      console.log("user :", user);
    } catch (error) {
      console.log("에러 : ", error);
    }
  }

  useEffect(() => {
    getAllUser();
  }, []);

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
            {user &&
              user.map((u) => (
                <SmallTableTr>
                  <SmallTableTd>{u.userId}</SmallTableTd>
                  <SmallTableTd>{u.createDate}</SmallTableTd>
                  <SmallTableTd>{u.email}</SmallTableTd>
                </SmallTableTr>
              ))}
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
