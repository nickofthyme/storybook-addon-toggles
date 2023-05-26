import { TogglesParameter } from '../src/types';
import { Decorator } from './Decorator';

import './styles.css'

export const decorators = [Decorator];

export const parameters: TogglesParameter = {
  toggles: {
    ignoreQueryParams: false,
    icon: 'form',
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
  }
};


