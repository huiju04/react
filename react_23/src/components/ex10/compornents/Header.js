import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { colors } from "../../../GlobalStyled";

export const Header = () => {
  const SHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const MoreBtn = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.darkGray};
    border-radius: 50%;
  `;

  const MenuBtn = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #fff;
    border-radius: 50%;
  `;

  return (
    <SHeader>
      <MoreBtn>
        <FontAwesomeIcon icon={faChevronDown} />
      </MoreBtn>
      <MenuBtn>
        <FontAwesomeIcon icon={faBars} />
      </MenuBtn>
    </SHeader>
  );
};
