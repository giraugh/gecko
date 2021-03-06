import { useHistory } from 'react-router-dom';
import { useTheme } from '@emotion/react';

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
  Date,
  Remaining,
  Content,
} from './taskDetailsStyle';

const TaskDetails = () => {
  const { push } = useHistory();
  const theme = useTheme();

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
              strokeDasharray: '628 628',
              strokeDashoffset: -100,
            }}
          />
        </svg>
        <Amount>$45</Amount>
        <AmountLabel>pledged</AmountLabel>
      </Ring>

      <div style={{ flex: 1 }}></div>

      <Content>
        <Title>Finish a book</Title>
        <Remaining>6 days left</Remaining>
        <Date>Complete by: 12/03/2021</Date>

        <Person name={'Burt Macklin'} image={'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2017%2F11%2Fburt-2000.jpg'} />
      </Content>
    </Container>
  );
};

export default TaskDetails;
