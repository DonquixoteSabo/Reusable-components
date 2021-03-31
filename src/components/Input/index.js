import { Group, StyledInput } from './styles';

function Input(props) {
  return (
    <Group error={props.error} size={props.size} fullWidth={props.fullWidth}>
      <label className='color' htmlFor='input'>
        {props.label}
      </label>

      <div className='container'>
        {props.startIcon ? (
          <span className='material-icons start'>{props.startIcon}</span>
        ) : props.endIcon ? (
          <span className='material-icons end'>{props.endIcon}</span>
        ) : null}
        <StyledInput id='input' name='input' type='text' {...props} />
      </div>

      <small className='color'>{props.helperText}</small>
    </Group>
  );
}

export default Input;
