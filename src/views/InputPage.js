import Input from 'components/Input';
import Title from 'components/Title';

function InputPage() {
  return (
    <div>
      <Title>You will see something about inputs here soon!</Title>
      <div>
        <Input label='kox' placeholder='siema' />
      </div>
      <div>
        <Input label='kox' placeholder='siema' helperText='ale kox' />
      </div>
      <div>
        <Input label='kox' placeholder='siema' error />
      </div>
      <div>
        <Input label='kox' placeholder='siema' error helperText='ale kox' />
      </div>
    </div>
  );
}

export default InputPage;
