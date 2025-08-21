import React from "react";
import { styled } from "storybook/theming";
import type { Decorator as DecoratorFn } from "@storybook/react";

import type { TogglesGlobals } from '../src/types';
import { StyledPre } from '../src/stories/common';

export const Decorator: DecoratorFn = (Story, context) => {
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
