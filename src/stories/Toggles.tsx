import React, { type FC, type ReactNode } from "react";
import { styled } from "storybook/theming";

import "./toggles.css";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Toggles: FC<Props> = ({ children, onClick }) => (
  <StyledButton
    type="button"
    className="my-button"
    onClick={onClick}
  >
    {children}
  </StyledButton>
);

const StyledButton = styled.button`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  font-size: 14px;
  padding: 11px 20px;
  margin: 1rem;
`
