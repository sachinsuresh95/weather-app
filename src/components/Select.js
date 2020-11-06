import tw, { styled } from 'twin.macro';

const Select = ({ label, options, onChange, current }) => {
  const setSelectedVaue = e =>
    onChange(options.find(o => o.id === e.target.value));

  return (
    <StyledLabel>
      {label}
      <StyledSelect value={current} onChange={setSelectedVaue}>
        {options.map(o => (
          <option value={o.id} key={o.id}>
            {o.name}
          </option>
        ))}
      </StyledSelect>
    </StyledLabel>
  );
};

const StyledLabel = styled.label`
  ${tw`font-semibold`}
`;

const StyledSelect = styled.select`
  ${tw`block border-b-2 border-theme-primary bg-transparent my-1 pb-1`}
`;

export default Select;
