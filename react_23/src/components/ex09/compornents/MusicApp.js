import styled from "styled-components";
import { IconEx } from "./IconEx";

const Wrap = styled.div`
  width: 400px;
  height: 750px;
  border-radius: 15px;
  border: 1px solid black;
  background-color: black;
  opacity: 0.8;
  margin: 50px auto 0 auto;
`;

const IconWrap = styled.div`
  width: 400px;
  height: 300px;
  border-radius: 15px;
  margin: 40px 0px 0px 0px;
`;

const ImgBox = styled.div`
  width: 270px;
  height: 300px;
  border-radius: 25px;
  background-color: aliceblue;
  margin: -235px auto 0px auto;
`;

const Title = styled.h3`
  text-align: center;
  margin-top: 15px;
  font-size: 25px;
  color: white;
`;

const Singer = styled.p`
  text-align: center;
  margin-top: 8px;
  font-size: 15px;
  font-weight: 100;
  color: white;
`;

const MusicTime = styled.div`
  width: 350px;
  height: 5px;
  background-color: white;
  margin: 20px auto 0px auto;
`;

const MusicTimes = styled.div`
  width: 45px;
  height: 5px;
  background-color: darkred;
`;

const Time_1 = styled.p`
  margin-top: 8px;
  font-size: 14px;
  color: white;
`;

const Time_2 = styled.p`
  font-size: 14px;
  margin: -13px 0px 0px 320px;
  color: white;
`;

const IconBox = styled.div`
  width: 300px;
  height: 60px;
  border-radius: 50px;
  background-color: aliceblue;
  margin: 150px auto 0px auto;
  font-size: 14px;
  line-height: 60px;
`;

const IconsubBox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: pink;
  margin: -50px 0 0 65px;
`;

export const MusicApp = () => {
  return (
    <div>
      <Wrap>
        <IconWrap>
          <IconEx />
        </IconWrap>

        <ImgBox></ImgBox>

        <Title>Blue bird</Title>
        <Singer>Pick Dreams</Singer>

        <MusicTime>
          <MusicTimes></MusicTimes>
          <Time_1>00:03</Time_1>
          <Time_2>03:40</Time_2>
        </MusicTime>

        <IconBox></IconBox>
        <IconsubBox></IconsubBox>
      </Wrap>
    </div>
  );
};
