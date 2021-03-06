import { useHistory } from 'react-router-dom';

import { Button } from 'components';

import {
  Container,
  Title,
} from './homeStyle';

const Home = () => {
  const { push } = useHistory();

  return (
    <Container>
      <Title>Home</Title>
      <p>Henlo says gencko</p>
      <Button type="button" onClick={() => push('/goal/test')}>View test goal</Button>
      <Button type="button" onClick={() => push('/new')}>Create a new goal</Button>
      <Button type="button" onClick={() => push('/')}>View onboarding</Button>
    </Container>
  );
};

export default Home;
