import { styled } from 'storybook/theming';

import React from 'react'

interface Props {
  checked: boolean,
  disabled?: boolean,
  onChange: (v: boolean) => void
}

export const Checkbox = ({ checked, onChange, disabled = false }: Props) => {
  return (
    <Container>
      <StyledInput
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={({ target: { checked } }) => {
          onChange(checked)
        }}
      />
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
`;

export const StyledInput = styled.input`
  margin: 0;

  :hover {
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  }
`;
