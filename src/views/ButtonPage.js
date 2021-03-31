import Button from 'components/Button';
import Title from 'components/Title';
import { Wrapper } from 'components/Wrapper';

function ButtonPage() {
  return (
    <>
      <Title>Button component</Title>
      <a
        href='https://material.io/resources/icons/?icon=add_shopping_cart&style=baseline'
        target='_blank'
        rel='noreferrer'
      >
        Icons Link:
        https://material.io/resources/icons/?icon=add_shopping_cart&style=baseline
      </a>
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
        <div className='small-container'>
          <div>
            <h3>{`<Button startIcon='add_shopping_cart' />`}</h3>
            <Button startIcon='add_shopping_cart'>Default</Button>
          </div>
          <div>
            <h3>{`<Button startIcon='logout' variant='text' />`}</h3>
            <Button startIcon='logout' variant='text'>
              Default
            </Button>
          </div>
          <div>
            <h3>{`<Button endIcon='get_app' />`}</h3>
            <Button endIcon='get_app'>Default</Button>
          </div>
          <div>
            <h3>{`<Button endIcon='upgrade' variant='outline' />`}</h3>
            <Button endIcon='upgrade' variant='outline'>
              Default
            </Button>
          </div>
        </div>
        <div className='small-container'>
          <div>
            <h3>{`<Button color='default' />`}</h3>
            <Button color='default'>Default</Button>
          </div>
          <div>
            <h3>{`<Button color='primary' />`}</h3>
            <Button color='primary'>Default</Button>
          </div>
          <div>
            <h3>{`<Button color='secondary' />`}</h3>
            <Button color='secondary'>Default</Button>
          </div>
          <div>
            <h3>{`<Button color='danger' />`}</h3>
            <Button color='danger'>Default</Button>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default ButtonPage;
