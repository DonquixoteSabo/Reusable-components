import Input from 'components/Input';
import Title from 'components/Title';
import { Wrapper } from 'components/Wrapper';

function InputPage() {
  return (
    <>
      <Title>Input component</Title>
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
          <h3>{'<Input />'}</h3>
          <Input />
        </div>
        <div>
          <h3>{'<Input error />'}</h3>
          <Input error />
        </div>
        <div>
          <h3>{'<Input disabled />'}</h3>
          <Input disabled />
        </div>
        <div className='small-container'>
          <div>
            <h3>{`<Input helperText='Some interesting Text' />`}</h3>
            <Input helperText='Some interesting Text' />
          </div>
          <div>
            <h3>{`<Input helperText='Some interesting Text' error />`}</h3>
            <Input helperText='Some interesting Text' error />
          </div>
        </div>
        <div className='small-container'>
          <div>
            <h3>{`<Input startIcon='anchor' />`}</h3>
            <Input startIcon='anchor' />
          </div>
          <div>
            <h3>{`<Input endIcon='build' />`}</h3>
            <Input startIcon='build' />
          </div>
        </div>
        <div>
          <h3>{`<Input defaultValue='Text' />`}</h3>
          <Input defaultValue='Text' />
        </div>
        <div className='small-container'>
          <div>
            <h3>{`<Input size='sm' />`}</h3>
            <Input size='sm' />
          </div>
          <div>
            <h3>{`<Input size='md' />`}</h3>
            <Input size='md' />
          </div>
        </div>
        <div style={{ width: '50%' }}>
          <h3>{`<Input fullWidth />, It has 100% parent's width`}</h3>
          <Input fullWidth />
        </div>
      </Wrapper>
    </>
  );
}

export default InputPage;
