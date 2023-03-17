import styled from "styled-components";

export const DefaultContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #605c5c;
  height: 100vh;
  justify-content:center;
  align-items:center;
`;

export const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 25% 25% 50%;

  background-color: lightgray;
  border-radius: 3rem;

  height: 41.438rem
  width: 86.821rem;

  margin: 11.75rem 1.563rem;
  color: black;
  align-items: center;
  justify-items: center;
`;

export const DetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  padding: 10px;
  margin: 0.5rem;
  background-color: white;
  color: black;
  align-items: center;
  justify-items: center;
`;

export const ImagesContainer = styled.div`
  grid-column: 1;
  grid-row: 1/4;
`;

export const ImgFrontBox = styled.div`
  grid-column: 1;
  grid-row: 1/3;
  display: flex;

  border-radius: 1rem;
  width: 17.625rem;
  height: 17.625rem;

  background-color: white;

  // align-self: stretch;
  // justify-self: stretch;
  align-items: center;
  justify-content: center;
`;

export const ImgBackBox = styled.div`
  grid-column: 1;
  grid-row: 3;
  display: flex;

  border-radius: 1rem;
  width: 17.625rem;
  height: 17.625rem;

  background-color: white;

  align-items: center;
  justify-content: center;
`;

export const StatsBox = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  grid-template-rows: repeat(8, 4%);
  border-radius: 1rem;
  padding: 10px;
  margin: 0.5rem;
  background-color: white;
  color: black;
  justify-items: center;
  align-items: center;
  grid-column: 2;
  grid-row: 1/4;
  height: 38.313rem;
  width: 343px;
`;

export const StatsName = styled.p`
  text-transform: capitalize;
  grid-column: 1;
  justify-self: end;
`;

export const StatsValue = styled.p`
  grid-column: 2;
  // grid-row: ;
`;

export const NameBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  // flex-direction:column;
  border-radius: 1rem;
  padding: 10px;
  margin: 0.5rem;
  background-color: white;
  color: black;
  grid-column: 3;
  grid-row: 1;
`;

export const MovesBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  padding: 10px;
  margin: 0.5rem;
  background-color: white;
  color: black;
  height: 100%;
  align-items: center;
  justify-items: center;
  grid-column: 3;
  grid-row: 2/4;
`;
