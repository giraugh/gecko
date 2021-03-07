import styled from '@emotion/styled'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  background: #FAFAFA;
`;

export const ButtonContainer = styled.div`
  height: 200px;
  width: 200px;
  margin: 40px auto;
  border-radius: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  & > button {
      background-color: ${props => props.theme.primary};
      color: white;
      border: none;
      border-radius: 50%;
      width: 100%;
      height: 100%;
      font-size: 2.2rem;
      font-weight: bold;
      transition: .1s;
      box-shadow: 0px 3px 3px 0px #025002;
  }

  & > button:active {
      background-color: white;
      color: ${props => props.theme.primary};
      border: ${props => props.theme.primary};
      box-shadow: inset 0px 3px 3px 1px #025002;
  }
`;

export const Title = styled.h2`
  margin: 0 0 8px;
  font-size: 2.3rem;
  text-decoration: underline;
  text-decoration-color: ${props => props.theme.primary};
  margin-top: 30px;
  text-align: center;
`;

export const ButtonLabel = styled.p`
  text-align: center;
`
