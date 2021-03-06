import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import {
  TextInput,
  Button,
} from 'components';

import {
  Container,
  Title,
} from './createTaskStyle';

const CreateTask = () => {
  const { handleSubmit, register } = useForm();
  const { push } = useHistory();
  const [step, setStep] = useState(0);

  const onSubmit = data => console.log(data);

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      {step === 0 && (
        <>
          <Title>What do you want to get done?</Title>
          <TextInput
            type="textarea"
            id="task_name"
            name="task_name"
            register={register}
            style={{
              fontSize: '1.7em',
            }}
            wrapperStyle={{
              flex: 1,
            }}
            placeholder={'Finish an important assignment'}
          />
          <Button type="button" onClick={() => setStep(1)}>Let's do it</Button>
          <div style={{ height: 12 }}></div>
          <Button type="button" variant="secondary" onClick={() => push('/home')}>Cancel</Button>
        </>
      )}

      {step === 1 && (
        <>
          <Title>Choose a friend to hold you accountable</Title>
          <TextInput
            type="textarea"
            id="task_name"
            name="task_name"
            register={register}
            style={{
              fontSize: '1.7em',
            }}
            wrapperStyle={{
              flex: 1,
            }}
            placeholder={'Finish an important assignment'}
          />
          <Button type="button" onClick={() => setStep(1)}>Let's do it</Button>
          <div style={{ height: 12 }}></div>
          <Button type="button" variant="secondary" onClick={() => push('/home')}>Cancel</Button>
        </>
      )}
    </Container>
  );
};

export default CreateTask;
