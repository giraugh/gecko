import { useState } from 'react';

import {
  Container,
  Slide,
  Title,
  P,
  Graphic,
  Controls,
  ArrowButton,
} from './onboardingStyle';

import arrowLeft from 'res/arrow-left.svg';
import arrowRight from 'res/arrow-right.svg';
import check from 'res/check.svg';

const slides = [
  {
    color: '#77B255',
    content: (
      <>
        <Graphic src={null} alt="" />
        <Title>Welcome to Gecko</Title>
      </>
    ),
  },
  {
    color: '#762dad',
    content: (
      <>
        <Title>Create a task</Title>
        <P>Some copy blah blah</P>
      </>
    ),
  },
  {
    color: '#1d86b3',
    content: (
      <>
        <Title>Set an amount</Title>
        <P>Some copy blah blah</P>
      </>
    ),
  },
  {
    color: '#d97400',
    content: (
      <>
        <Title>Select a charity</Title>
        <P>Some copy blah blah</P>
      </>
    ),
  },
  {
    color: '#b5004b',
    content: (
      <>
        <Title>Finished?</Title>
        <P>If a friend confirms you've completed the task, you get your money back</P>
      </>
    ),
  },
  {
    color: '#00a9b5',
    content: (
      <>
        <Title>Didn't finish in time?</Title>
        <P>Your money will get donated to charity instead</P>
      </>
    ),
  },
];

const Onboarding = () => {
  const [step, setStep] = useState(0);

  return (
    <Container>
      <Slide slideColor={slides[step].color}>
        {slides[step].content}
      </Slide>

      <Controls>
        <ArrowButton
          disabled={step < 1}
          type="button"
          onClick={() => setStep(step-1)}
        ><img src={arrowLeft} alt="" /></ArrowButton>
        <ArrowButton
          disabled={step > slides.length-1}
          type="button"
          onClick={() => step < slides.length-1 ? setStep(step+1) : console.log('done')}
        ><img src={step < slides.length-1 ? arrowRight : check} alt="" /></ArrowButton>
      </Controls>
    </Container>
  );
};

export default Onboarding;
