import styled from "styled-components";
import { IconEx } from "./IconEx";

const Wrap = styled.div`
  width: 400px;
  height: 600px;
  border-radius: 15px;
  border: 1px solid black;
  background-color: black;
  margin: 50px auto 0 auto;
`;

const IconWrap = styled.div`
  width: 270px;
  height: 300px;
  border-radius: 15px;
  margin: 40px 0px 0px 0px;
  font-size: 20px;
`;

export const MusicApp = () => {
  return (
    <div>
      <Wrap>
        <IconWrap>
          <IconEx />
        </IconWrap>

        {/* <ImgBox></ImgBox> */}

        {/* <Title>Blue bird</Title> */}
        {/* <Singer>Pick Dreams</Singer> */}

        {/* <MusicTime> */}
        {/* <Time_1>00:03</Time_1> */}
        {/* <Time_2>03:40</Time_2> */}
        {/* </MusicTime> */}

        {/* <IconBox></IconBox> */}
        {/* <IconsubBox></IconsubBox> */}
      </Wrap>
    </div>
  );
};
