import styled from "styled-components";
import { baseLayoutSize, fontSize } from "../../../GlobalStyled";

const Section = styled.section`
  padding: ${baseLayoutSize.padding};
  h3 {
    font-size: ${fontSize.title};
  }
`;

const ConWrap = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;
const Con = styled.div`
  width: 30%;
  height: 400px;
  background-color: gray;
  /* background: url(${(props) => props.$bgImg}) no-repeat center / cover; */
  /* transition: 0.5s; */
  /* &:hover { */
  /* opacity: 0.5; */
  /* } */
`;

export const Section_2 = () => {
  return (
    <Section>
      <h3>두번째 섹션</h3>
      <ConWrap>
        <Con
        // $bgImg={
        //   "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fko%2Fwallpapers%2Fnature%2Fsky&psig=AOvVaw0B9PlTijcbmQh1Sy02EFE8&ust=1697791378742000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIjP9_HbgYIDFQAAAAAdAAAAABAE"
        // }
        ></Con>
        <Con
        // $bgImg={
        //   "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fko%2Fcategory%2Fbackgrounds-textures&psig=AOvVaw0B9PlTijcbmQh1Sy02EFE8&ust=1697791378742000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIjP9_HbgYIDFQAAAAAdAAAAABAJ"
        // }
        ></Con>
        <Con
        // $bgImg={
        //   "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fko%2Fwallpapers&psig=AOvVaw0B9PlTijcbmQh1Sy02EFE8&ust=1697791378742000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIjP9_HbgYIDFQAAAAAdAAAAABAT"
        // }
        ></Con>
      </ConWrap>
    </Section>
  );
};
