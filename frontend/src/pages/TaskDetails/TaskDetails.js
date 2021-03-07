import { useHistory } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { useState, useEffect } from 'react'
import md5 from 'md5'

import {
  Person,
  BackButton,
} from 'components';

import {
  Container,
  Amount,
  AmountLabel,
  Ring,
  Title,
  DateLabel,
  Remaining,
  Content,
} from './taskDetailsStyle';
import { getGoal, getUser } from '../../services/api'

const gravatarLink = (email) =>
    `https://www.gravatar.com/avatar/${md5(email)}?d=retro`

const RING_CIRC = 628

const TaskDetails = ({ match }) => {
  const { push } = useHistory();
  const theme = useTheme();
  const goalId = match.params.id;
  const [goal, setGoal] = useState();

  useEffect(() => {
    getGoal(goalId).then(goal => {
        setGoal(goal)
    })
  }, [getGoal, goalId])

  if (!goal) {
    return <div>Loading...</div>
  }

  const remaining = goal.endDate - (0)
  const duration = goal.endDate - goal.startDate
  const progress = remaining / duration

  return (
    <Container>
      <BackButton onClick={() => push('/home')} />

      <Ring>
        <svg width={220} height={220}>
          <circle
            stroke={'#EEE'}
            strokeWidth={14}
            fill={'transparent'}
            r={100}
            cx={110}
            cy={110}
          />
          <circle
            stroke={theme.primary}
            strokeWidth={14}
            fill={'transparent'}
            r={100}
            cx={110}
            cy={110}
            style={{
              strokeDasharray: `${RING_CIRC} ${RING_CIRC}`,
              strokeDashoffset: -1 * RING_CIRC * progress,
            }}
          />
        </svg>
        <Amount>${goal.amount}</Amount>
        <AmountLabel>pledged</AmountLabel>
      </Ring>

      <div style={{ flex: 1 }}></div>
        <button style={{opacity: 0}} onClick={() => push(`/goal/${goalId}/approve`)}>&nbsp;</button>
      <Content>
        <Title>{goal.name}</Title>
        <Remaining>23 hours remaining</Remaining>
        <DateLabel>Complete by: 12/03/2021</DateLabel>

        <TaskPerson goal={goal} />
      </Content>
    </Container>

  );
};

const TaskPerson = ({goal}) => {
    const [user, setUser] = useState(null)
    
    useEffect(() => {
        getUser(goal.author).then(setUser)
    }, [goal])

    if (!user) return <div>Loading...</div>

    return (
        <Person name={user.name} image={gravatarLink(user.email)}/>
    )
}

export default TaskDetails;
