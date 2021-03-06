import md5 from 'md5';
import { useHistory, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from 'components';

import {
  Container,
  Title,
  GoalContainer,
  GoalList,
  GoalImage,
  GoalDetails,
  TotalPledge,
  TotalPledgeLabel
} from './homeStyle';
import { getUser, getAuthoredGoals } from '../../services/api'

const sum = (a, b) => a + b

const gravatarLink = (email) =>
    `https://www.gravatar.com/avatar/${md5(email)}?d=retro`

const Home = () => {
  const { push } = useHistory();

  const [userID, setUserID] = useState(1);
  const [goals, setGoals] = useState();

  // refetch goals on userID update
  useEffect(() => {
      getAuthoredGoals(userID)
        .then(setGoals)
        .catch(err => console.warn(err))
  }, [userID])

  return (
    <Container>
      <Title>Home</Title>
      {goals ? <>
          <TotalPledge>
            <TotalPledgeLabel>Total Pledged</TotalPledgeLabel>
            <span>${goals ? goals.map(g => g.amount).reduce(sum, 0) : 0}</span>
          </TotalPledge>
          <GoalList>
            {goals.map(goal => <Goal goal={goal} key={goal.id} avatarUserField='author' /> )}
          </GoalList>
      </> : <>
        <h3></h3>
      </>}
      {/*
      <Button type="button" onClick={() => push('/goal/test')}>View test goal</Button>
      <Button type="button" onClick={() => push('/new')}>Create a new goal</Button>
      <Button type="button" onClick={() => push('/')}>View onboarding</Button>
      */}
    </Container>
  );
};

const Goal = ({ goal, avatarUserField }) => {
    const userID = goal[avatarUserField];
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        getUser(userID).then(setUser)
    }, [setUser, userID])

    const remainingTime = goal.endDate - Date.now()
    const remainingMins = Math.floor(remainingTime / 60000)
    const remainingHours = Math.floor(remainingMins / 60)
    const remainingDays = Math.floor(remainingHours / 24)

    return (
    <Link to={`/goal/${goal.id}`} style={{textDecoration: 'none' }}>
       <GoalContainer>
         <div>
            {
                user
                    ? <GoalImage src={gravatarLink(goal.id)} alt='profile' />
                    : <GoalImage src={gravatarLink(goal.id)} alt='profile' />
            }
         </div>
         <div>
             <h3>{goal.name}</h3>
             <GoalDetails>
                <span>
                    ${goal.amount}
                </span>
                <span>
                    {
                        remainingDays > 0
                            ? <> {remainingDays} days </>
                            : <> {remainingHours} hours </>
                    } remaining
                </span>
             </GoalDetails>
       </div>
       </GoalContainer>
       </Link>
    )
}

export default Home;
