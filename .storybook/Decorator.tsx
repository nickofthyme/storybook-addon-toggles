import { DecoratorFunction } from "@storybook/addons";
import { styled } from "@storybook/theming";
import React from "react";

import { TogglesGlobals } from '../src/types';
import { StyledPre } from '../stories/common';

export const Decorator: DecoratorFunction<JSX.Element> = (Story, context) => {
  const globals = context.globals as TogglesGlobals;

  return (
    <Container>
      <Story {...context} />

      <br />
      <hr />

      <h2>Globals</h2>
      <StyledPre>
        {`${JSON.stringify(globals, null, 2)}`}
      </StyledPre>
    </Container>
  );
};

const Container = styled.div`
  margin: 3rem;
`

const CustomBackground = styled.div`
  padding: 1rem;
  margin-top: 1rem;
  background: #EEEEEE !important;
`

