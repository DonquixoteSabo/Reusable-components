import Button from 'components/Button';
import Title from 'components/Title';
import { Wrapper } from './ButtonPage.styles';

function ButtonPage() {
  return (
    <>
      <Title>strona z buttonami PAPA</Title>
      <Wrapper>
        <div>
          <h3>{'<Button />'}</h3>
          <Button>Default</Button>
        </div>
        <div>
          <h3>{`<Button variant='outline'/>`}</h3>
          <Button variant='outline'>Default</Button>
        </div>
        <div>
          <h3>{`<Button variant='text'/>`}</h3>
          <Button variant='text'>Default</Button>
        </div>
        <div>
          <h3>{`<Button disableShadow />`}</h3>
          <Button disableShadow>Default</Button>
        </div>
        <div className='small-container'>
          <div>
            <h3>{`<Button disabled />`}</h3>
            <Button disabled>Disabled</Button>
          </div>
          <div>
            <h3>{`<Button disabled variant='txt' />`}</h3>
            <Button variant='text' disabled>
              Disabled
            </Button>
          </div>
        </div>
        <div className='small-container'>
          <div>
            <h3>{`<Button size='sm' />`}</h3>
            <Button size='sm'>Default</Button>
          </div>
          <div>
            <h3>{`<Button size='md' />`}</h3>
            <Button size='md'>Default</Button>
          </div>
          <div>
            <h3>{`<Button size='lg' />`}</h3>
            <Button size='lg'>Default</Button>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default ButtonPage;
