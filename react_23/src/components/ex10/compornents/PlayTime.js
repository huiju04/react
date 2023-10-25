import styled from "styled-components";

export const PlayTime = () => {
  const SPlayTime = styled.div``;

  const Progress = styled.div`
    height: 6px;
    background-color: #555;
    border-radius: 3px;
    overflow: hidden;
  `;

  const Bar = styled.div`
    width: 10%;
    height: 100%;
    background-color: lightblue;
  `;

  const TimeWrap = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #808080;
    margin-top: 6px;
  `;

  return (
    <SPlayTime>
      <Progress>
        <Bar />
      </Progress>

      <TimeWrap>
        <p>00:03</p>
        <p>03:40</p>
      </TimeWrap>
    </SPlayTime>
  );
};
