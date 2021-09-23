import { InputContainer } from './Filter.styled';

export const Filter = ({ onGetValue }) => {
  const handleChange = event => {
    const { value } = event.currentTarget;

    onGetValue(value);
  };

  return (
    <InputContainer>
      <label>
        Find contacts by name
        <input onChange={handleChange} type="text" />
      </label>
    </InputContainer>
  );
};
