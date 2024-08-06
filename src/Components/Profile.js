import { Text, Wrapper } from "../Style/StyledComponents";

function Profile() {
  return (
    <>
      <Wrapper
        width={`200px`}
        height={`300px`}
        bgColor={`#181818`}
        al={`center`}
        ju={`center`}
        margin={`20px 100px 0 0`}
        radius={`6px`}
      >
        <Text color={`#fff`}>user infonmaton</Text>
      </Wrapper>
    </>
  );
}

export default Profile;
