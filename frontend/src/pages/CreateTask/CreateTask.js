import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import md5 from 'md5';

import {
  TextInput,
  Button,
  BackButton,
  Person,
  SelectInput,
} from 'components';

import {
  Container,
  Title,
  Or,
  Prefab,
  MoneyInput,
} from './createTaskStyle';

const people = [
  {
    id: 1,
    name: 'Burt Macklin',
    email: 'burt@macklin.fbi',
    phone: 5555555555,
  },
  {
    id: 2,
    name: 'Ben Grant',
    email: 'benjamin.grantgra0007@gmail.com',
    phone: 5555555555,
  },
];

const CreateTask = () => {
  const { handleSubmit, register, setValue } = useForm({
    shouldUnregister: false,
  });
  const { push } = useHistory();
  const [step, setStep] = useState(0);

  const onSubmit = data => {
    //TODO create goal in API
    console.log(data);
    push('/goal/0');
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      {step === 0 && (
        <>
          <BackButton onClick={() => push('/home')} />
          <Title>What do you want to get done?</Title>
          <TextInput
            type="text"
            id="task_name"
            name="task_name"
            register={register}
            placeholder={'Write your own...'}
          />
          <Button type="button" onClick={() => setStep(1)}>Let's do it</Button>
          <Or>OR</Or>
          <Prefab type="button" onClick={() => {
            setValue('task_name', '💪 30 Day Gym');
            setStep(1);
          }}>💪 30 Day Gym</Prefab>
          <Prefab type="button" onClick={() => {
            setValue('task_name', '🏃‍♂️ Daily Run');
            setStep(1);
          }}>🏃‍♂️ Daily Run</Prefab>
          <Prefab type="button" onClick={() => {
            setValue('task_name', '📖 Finish a book');
            setValue('amount', '20');
            setValue('date', '2021-03-12');
            setStep(1);
          }}>📖 Finish a book</Prefab>
          <Prefab type="button" onClick={() => {
            setValue('task_name', '🎸 Learn a guitar solo');
            setStep(1);
          }}>🎸 Learn a guitar solo</Prefab>
          <Prefab type="button" onClick={() => {
            setValue('task_name', '🍝 Make a home-cooked meal');
            setStep(1);
          }}>🍝 Make a home-cooked meal</Prefab>
          <Prefab type="button" onClick={() => {
            setValue('task_name', '🧮 Submit maths assignment');
            setStep(1);
          }}>🧮 Submit maths assignment</Prefab>
        </>
      )}

      {step === 1 && (
        <>
          <BackButton onClick={() => setStep(0)} />
          <Title>Choose a friend to hold you accountable</Title>
          <br />

          {people.map(person =>
            <a key={person.id} href="#" style={{ textDecoration: 'none', color: 'inherit' }} onClick={(e) => {
              e.preventDefault();
              setValue('person', person.id);
              setStep(2);
            }}>
              <Person
                name={person.name}
                image={`https://www.gravatar.com/avatar/${md5(person.email)}?d=retro`}
              />
            </a>
          )}

          <br />
          <TextInput
            label="Invite a friend"
            type="phone"
            placeholder={'📞 Mobile number'}
          />
          <Button type="button">Invite</Button>
        </>
      )}

      {step === 2 && (
        <>
          <BackButton onClick={() => setStep(1)} />
          <Title>How much will you pledge?</Title>

          <MoneyInput>
            <span>$</span>
            <TextInput
              type="number"
              id="amount"
              name="amount"
              register={register}
              placeholder={'30'}
              wrapperStyle={{ flex: 1 }}
            />
          </MoneyInput>

          <Title>Choose a charity</Title>

          <SelectInput
            id="charity"
            name="charity"
            register={register}
            options={[{ label: 'Divide between all charities', value: '' }, { label: 'More charities from api', value: 0 }]}
          />

          <Button type="button" onClick={() => setStep(3)}>Next</Button>
        </>
      )}

      {step === 3 && (
        <>
          <BackButton onClick={() => setStep(2)} />
          <Title>Set your deadline</Title>

          <TextInput
            type="date"
            id="date"
            name="date"
            register={register}
            style={{
              fontSize: '1.3em',
            }}
          />

          <Button type="submit">Let's do it!</Button>
        </>
      )}
    </Container>
  );
};

export default CreateTask;
