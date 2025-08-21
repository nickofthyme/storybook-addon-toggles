import { styled } from 'storybook/theming';

import React from 'react'

interface Props {
  value: boolean,
  disabled?: boolean,
  setValue: (v: boolean) => void
}

export const Toggle = ({ value, setValue, disabled = false }: Props) => {
  return (
    <Container>
      <StyledInput
        type="checkbox"
        checked={value}
        disabled={disabled}
        onChange={({ target: { checked } }) => {
          setValue(checked)
        }}
      />
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
`;

export const StyledInput = styled.input`
  :hover {
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  }
`;
