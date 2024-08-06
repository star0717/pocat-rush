import { Form, Option, Select, Text, Wrapper } from "../Style/StyledComponents";

function Footer() {
  return (
    <>
      <Wrapper
        height={`300px`}
        bgColor={`#242424`}
        al={`center`}
        ju={`center`}
        dr={`column`}
      >
        <Text color={`#fff`} margin={`0 0 10px 0 `}>
          PocatRush Made By TBeaver
        </Text>
        <Form>
          <Select>
            <Option>Yuk SeungHwan</Option>
            <Option>Yoon Byeol</Option>
            <Option>Song JinKyung</Option>
          </Select>
        </Form>
      </Wrapper>
    </>
  );
}

export default Footer;
