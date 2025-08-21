import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import { StyledPre } from "./common";
import { Toggles } from "./Toggles";

const meta: Meta<typeof Toggles> = {
  title: "Toggles",
  component: Toggles,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Defaults: Story = {
  render: () => (
    <div>
      <span>
        By default the toggle values defined in the parameters will be used. Allowing modifications from the menu bar.
      </span>
    </div>
  ),
};

export const ReplacingToggles: Story = {
  render: () => (
    <div>
      <span>
        You can replace or change global toggles at the story level using the parameters option.
      </span>

      <StyledPre>
{`Story.parameters = {
  toggles: {
    options: [
      {
        id: 'new-option-1',
        title: 'New Option 1',
        defaultValue: false,
      },
      {
        id: 'new-option-2',
        title: 'Options 2',
        defaultValue: true,
      }
    ]
  }
}`}
      </StyledPre>
    </div>
  ),
  parameters: {
    toggles: {
      options: [
        {
          id: 'new-option-1',
          title: 'New Option 1',
          defaultValue: false,
        },
        {
          id: 'new-option-2',
          title: 'Options 2',
          defaultValue: true,
        }
      ]
    }
  }
};

export const UnclearableToggles: Story = {
  render: () => (
    <div>
      <span>
        You can set `clearable` to `false` to hide option to reset toggle values to their defaults.
      </span>

      <StyledPre>
{`Story.parameters = {
  toggles: {
    clearable: false,
  }
}`}
      </StyledPre>
    </div>
  ),
  parameters: {
    toggles: {
      // ignoreQueryParams: true,
      clearable: false,
    }
  }
};

export const ToggleOverrides: Story = {
  render: () => (
    <div>
      <span>
        You can override toggle values using the override option with the id and new value. This will override the default toggle values.
      </span>

      <StyledPre>
{`Story.parameters = {
  toggles: {
    overrides: {
      'option-1': false,
      'option-2': false,
      'option-3': false,
    }
  }
}`}
      </StyledPre>
    </div>
  ),
  parameters: {
    toggles: {
      overrides: {
        'option-1': false,
        'option-2': false,
        'option-3': false,
      }
    }
  }
};

export const ToggleInfoDescription: Story = {
  render: () => (
    <div>
      <span>
        You can set the description on the toggle to show an info icon that displays on hover.
      </span>

      <StyledPre>
{`Story.parameters = {
  toggles: {
    options: [
      {
        id: 'info-option',
        title: 'With info',
        description: 'This toggle has info/description',
        defaultValue: false,
      },
      {
        id: 'no-info-option',
        title: 'Without info',
        defaultValue: false,
      },
    ]
  }
}`}
      </StyledPre>
    </div>
  ),
  parameters: {
    toggles: {
      options: [
        {
          id: 'info-option',
          title: 'With info',
          description: 'This toggle has info/description',
          defaultValue: false,
        },
        {
          id: 'no-info-option',
          title: 'Without info',
          defaultValue: false,
        },
      ]
    }
  }
};

export const DisableToggles: Story = {
  render: () => (
    <div>
      <span>
        You can set the toggle disabled property to a boolean or an object. The object will keys are other toggle ids and the value that will disable the trigger.
        <br />
        <br />
        For example, the following setup would disable option-2 when option-1 is set to true. Option-3 is always disabled.
      </span>

      <StyledPre>
{`Story.parameters = {
  toggles: {
    options: [
      {
        id: 'option-1',
        title: 'Option 1',
        defaultValue: false,
      },
      {
        id: 'option-2',
        title: 'Option 2',
        defaultValue: true,
        disabled: {
          "option-1": true
        }
      },
      {
        id: 'option-3',
        title: 'Option 3',
        defaultValue: true,
        disabled: true,
      },
    ]
  }
}`}
      </StyledPre>
    </div>
  ),
  parameters: {
    toggles: {
      options: [
        {
          id: 'option-1',
          title: 'Option 1',
          defaultValue: false,
        },
        {
          id: 'option-2',
          title: 'Option 2',
          defaultValue: true,
          disabled: {
            "option-1": true
          }
        },
        {
          id: 'option-3',
          title: 'Option 3',
          defaultValue: true,
          disabled: true,
        },
      ]
    }
  }
};
