import { useHistory } from 'react-router-dom';

import {
  Container,
  Slide,
  Title,
  Graphic,
  Button,
} from './whoaStyle';

import logo from 'res/logo.png';

const Whoa = () => {
  const { push } = useHistory();

  return (
    <Container>
      <Slide>
        <Graphic src={logo} alt="" />
        <Title>Meet Gecko</Title>

        <Button type="button" onClick={() => push('/new')}>Whoa!</Button>
      </Slide>
    </Container>
  );
};

export default Whoa;
