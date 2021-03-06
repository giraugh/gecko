import { Wrapper, Image, Name } from './personStyle';

const Person = ({
  image,
  name,
}) => {
  return (
    <Wrapper>
      <Image src={image} alt="" />
      <Name>{name}</Name>
    </Wrapper>
  );
};

export default Person;
