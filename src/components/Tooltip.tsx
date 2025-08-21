import React, { type ComponentProps, type FC } from 'react'
import { RefreshIcon, InfoIcon } from "@storybook/icons";
import { TooltipLinkList } from 'storybook/internal/components';

import type { ToggleOptions, Toggles } from '../types';
import { Checkbox } from './Checkbox';
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
      <Column>
        <Title>{title ?? id}</Title>
        {description && <Description>{description}</Description>}
      </Column>
    ),
    active: false,
    disabled,
    onClick: disabled ? undefined : () => {
      setToggle(id, !toggles[id]);
    },
    icon: (
      <Checkbox
        checked={toggles[id] ?? false}
        disabled={disabled}
        onChange={(checked) => setToggle(id, checked)}
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
      icon: <RefreshIcon height={12} fill="currentColor" />
    });
  }

  return <TooltipLinkList links={links} />
}

const Column = styled.span({
  display: 'flex',
  flexDirection: 'column',
});

const Title = styled.span({
  textTransform: 'capitalize',
});

const Description = styled.span(({ theme }) => ({
  fontSize: 11,
  color: theme.textMutedColor,
}));

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
