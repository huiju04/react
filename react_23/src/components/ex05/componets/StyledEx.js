import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.$bgColor};
  border: 10px solid black;
`;

const Box_2 = styled.div`
  width: 500px;
  height: 200px;
  border: 10px solid black;
`;

export const StyledEx = () => {
  return (
    <div>
      <Box $bgColor={"teal"}></Box>
      <Box $bgColor={"salmon"}></Box>
      <Box_2></Box_2>
    </div>
  );
};

/* ${(props)=>props.변수명}는 기본 구조이다  */
