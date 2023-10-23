import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.$bg};
`;

export const EventEx02 = () => {
  const [bgColor, setBgColor] = useState("aliceblue");
  const [num, setNum] = useState(0);

  const onClickBox = () => {
    // setBgColor("pink");
    if (num === 0) {
      setBgColor("teal");
      setNum(num + 1);
    } else if (num === 1) {
      setBgColor("aliceblue");
      setNum(num - 1);
    }
  };

  return (
    <div>
      <Box $bg={bgColor} onClick={onClickBox}></Box>
    </div>
  );
};
