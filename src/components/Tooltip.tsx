import React, { ComponentProps, FC } from 'react'
import { TooltipLinkList, Icons } from '@storybook/components';

import { Parameters, ToggleOptions, Toggles } from '../types';
import { Toggle } from './Toggle';
import { styled } from '@storybook/theming';

type Link = ComponentProps<typeof TooltipLinkList>['links'][number];

interface Props {
  toggles: Toggles;
  setToggle: (id:string, value: boolean, forcedUpdate?: boolean) => void;
  resetToggles: () => void;
  options: (Omit<ToggleOptions, 'disabled'> & { disabled?: boolean })[]
  clearable?: boolean;
}

export const Tooltip: FC<Props> = ({ toggles, setToggle, resetToggles, options, clearable = true }) => {
  const links: Link[] = options.map(({ id, title, description, disabled }) => ({
    id,
    key: id,
    title: title ?? id,
    active: false,
    disabled,
    onClick: disabled ? undefined : () => {
      setToggle(id, !toggles[id]);
    },
    center: description ? (
      <Container>
        <div title={description}>
          <Icons icon="info" height={12} />
        </div>
      </Container>
    ) : null,
    right: (
      <Toggle
        disabled={disabled}
        value={toggles[id]}
        setValue={(value) => {
          setToggle(id, value)
        }}
      />
    )
  }));

  if (clearable) {
    const id = '__clearable__link___';

    links.unshift({
      id,
      key: id,
      loading: false,
      title: 'Reset toggle defaults',
      active: false,
      onClick: resetToggles,
      right: <Icons icon="cross" />
    });
  }

  return <TooltipLinkList links={links} />
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
