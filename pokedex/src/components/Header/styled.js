import styled from "styled-components";

export const HeaderContainer = styled.header`
  //   display: flex;
  //   flex-wrap: wrap;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  ////justify-items: center;
  // margin: 0.5rem;
  // padding: 1rem 1rem 1rem 1rem;
  // padding: 0.5rem;
  // background-color:red;
  // padding-bottom: 2rem;
  min-height: 160px;
  //   grid-gap: 5px;
`;

export const LeftButtonContainer = styled.div`
// border: 5px solid black;
grid-column: 1;
justify-self: start;
align-self: center;
padding-left: 6.25rem;
`

export const RightButtonContainer = styled.div`
// border: 5px solid black;
grid-column: 3;
justify-self: end;
align-self: center;
padding-right: 2.5rem;
`

export const LogoContainer = styled.div`
// border: 5px solid black;
grid-column: 2;
justify-self: center;
align-self: center;
`
