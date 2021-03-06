import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from 'components';

import {
  Container,
  Title,
} from './homeStyle';
import { getAuthoredGoals } from '../../services/api'

const sum = (a, b) => a + b

const Home = () => {
  const { push } = useHistory();

  const [userID, _] = useState(1);
  const [goals, setGoals] = useState();

  // refetch goals on userID update
  useEffect(() => {
      getAuthoredGoals(userID).then(goals => {
          console.log(goals)
          setGoals(goals)
      }).catch(err => console.warn(err))
  }, [userID])

  return (
    <Container>
      <Title>Home</Title>
      <div>
        <span>
        Total current pledged
        </span>
        <h3>{goals ? goals.map(g => g.amount).reduce(sum, 0) : 0}$</h3>
      </div>
      <p>Henlo says gencko</p>
      <Button type="button" onClick={() => push('/goal/test')}>View test goal</Button>
      <Button type="button" onClick={() => push('/new')}>Create a new goal</Button>
      <Button type="button" onClick={() => push('/')}>View onboarding</Button>
    </Container>
  );
};

export default Home;
