import type { Preview } from "@storybook/react-vite";

import type { TogglesParameter } from '../src/types';
import { Decorator } from './Decorator';

import './styles.css'

type Parameters = Preview['parameters'] & TogglesParameter;

const preview: Preview = {
  decorators: [Decorator],
  parameters: {
    toggles: {
      // ignoreQueryParams: false,
      options: [
        {
          id: 'option-1',
          title: 'Option 1',
          description: 'Some description of option 1',
          defaultValue: false,
        },
        {
          id: 'option-2',
          title: 'Option 2',
          defaultValue: true,
        },
        {
          id: 'option-3',
          title: 'Option 3',
          defaultValue: true,
          disabled: {
            "option-2": false
          }
        },
      ],
    },
  } satisfies Parameters,
  initialGlobals: {
    toggles: {},
  },
}

export default preview;
