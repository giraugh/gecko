import styled from '@emotion/styled';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  margin: 10px 0;
  font-size: 2rem;
`;

export const GoalContainer = styled.div`
  display: grid;
  color: ${props => props.theme.primary};
  grid-template-columns: 1fr 3fr;
  column-gap: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 2px solid ${props => props.theme.primary};
  padding: 7px;
  background-color: white;
 /* box-shadow: 0px 2px 1px 0px #404040;*/

  &:hover {
    background-color: #EEE;
  }
`

export const GoalList = styled.section`
  padding: 4px;
  margin-bottom: 30px;
`

export const GoalImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`

export const TotalPledge = styled.section`
  font-size: 1.6rem;
  text-align: center;
  height: min-content;
  margin-bottom: 20px;
  margin-top: 20px;
`

export const TotalPledgeLabel = styled.span`
  display: block;
  font-size: 2rem;
  font-style: italic;
`
