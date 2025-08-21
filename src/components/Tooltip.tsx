import React, { type ComponentProps, type FC } from 'react'
import { UndoIcon, InfoIcon } from "@storybook/icons";
import { TooltipLinkList } from 'storybook/internal/components';

import type { ToggleOptions, Toggles } from '../types';
import { Toggle } from './Toggle';
import { styled } from 'storybook/theming';

type Links = ComponentProps<typeof TooltipLinkList>['links'][number];

interface Props {
  hasChanges: boolean;
  toggles: Toggles;
  setToggle: (id:string, value: boolean, forcedUpdate?: boolean) => void;
  resetToggles: () => void;
  options: (Omit<ToggleOptions, 'disabled'> & { disabled?: boolean })[]
  clearable?: boolean;
}

export const Tooltip: FC<Props> = ({ toggles, setToggle, resetToggles, options, clearable = true, hasChanges }) => {
  const links: Links = options.map(({ id, title, description, disabled }) => ({
    id,
    key: id,
    title: (
      <TitleContainer title={title ?? id} description={description} />
    ),
    active: false,
    disabled,
    onClick: disabled ? undefined : () => {
      setToggle(id, !toggles[id]);
    },
    right: (
      <Toggle
        disabled={disabled}
        value={toggles[id] ?? false}
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
      disabled: !hasChanges,
      right: (
        <CrossIconContainer>
          <UndoIcon height={12} fill="currentColor" />
        </CrossIconContainer>
      )
    });
  }

  return <TooltipLinkList links={links} />
}

const CrossIconContainer = styled.div`
  margin-right: 4px;
`;

const TitleContainer = ({ title, description }: Pick<ToggleOptions, 'title' | 'description'>) => {
  return (
    <Container>
      <span>{title}</span>
      {description && (
        <DescriptionContainer title={description}>
          <InfoIcon height={12} />
        </DescriptionContainer>
      )}
    </Container>
  )
}

const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 4px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 100%;
`;
