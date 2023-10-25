import styled from "styled-components";
import { colors } from "../../../GlobalStyled";
import { Header } from "./Header";
import { Cover } from "./Cover";
import { PlayTime } from "./PlayTime";
import { BtnWrap } from "./BtnWrap";
import { UserCon } from "./UserCon";

export const MuiscApp = () => {
  const Wrap = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #555;
    color: white;
    position: relative;
  `;

  const Container = styled.div`
    max-width: 400px;
    width: 100%;
    background-color: ${colors.darkGray};
    padding: 50px 20px;
  `;

  return (
    <Wrap>
      <Container>
        <Header />

        <Cover />

        <PlayTime />

        <BtnWrap />

        <UserCon />
      </Container>
    </Wrap>
  );
};
