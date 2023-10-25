import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const BtnWrap = () => {
  const SBtnWrap = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0;
    font-size: 18px;
    li:nth-child(3) {
      width: 60px;
      height: 60px;
      background-color: lightblue;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #333;
    }
  `;

  return (
    <SBtnWrap>
      <li>
        <FontAwesomeIcon icon={faShuffle} />
      </li>
      <li>
        <FontAwesomeIcon icon={faBackward} />
      </li>
      <li>
        <FontAwesomeIcon icon={faPause} />
      </li>
      <li>
        <FontAwesomeIcon icon={faForward} />
      </li>
      <li>
        <FontAwesomeIcon icon={faRetweet} />
      </li>
    </SBtnWrap>
  );
};
