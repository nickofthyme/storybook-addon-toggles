import React, { useEffect, useCallback, useState, useRef, useMemo, type FC } from "react";
import { FormIcon } from "@storybook/icons";
import { useGlobals, useParameter, type API } from "storybook/manager-api";
import { CURRENT_STORY_WAS_SET, SET_STORIES } from "storybook/internal/core-events";
import { IconButton, WithTooltip } from 'storybook/internal/components';

import { TOOL_ID } from "../constants";
import type { Parameters, Toggles } from '../types';
import { Tooltip } from "./Tooltip";

interface Props {
  api: API;
}

const iconBtnId = "storybook-addon-toggles-icon-btn";

export const Tool: FC<Props> = ({ api }) => {
  const [hasChanges, setHasChanges] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [globals, updateGlobals] = useGlobals();
  const togglesParams = useParameter<Parameters | null>('toggles', null);
  const togglesParamsRef = useRef(togglesParams);

  useEffect(() => {
    togglesParamsRef.current = togglesParams;
  }, [togglesParams])

  const defaultToggles = useMemo<Toggles>(() => {
    return (togglesParams?.options ?? []).reduce<Toggles>((acc, toggle) => {
      if (!(toggle.id in acc)) acc[toggle.id] = toggle.defaultValue;
      return acc;
    }, togglesParams?.overrides ?? {})
  }, [togglesParams?.options, togglesParams?.overrides])

  const setToggles = useCallback(
    (toggles: Record<string, boolean>, forcedUpdate = false) => {
      if (togglesParams && toggles) {
        togglesParams?.onChange?.(toggles);
        updateGlobals({ toggles });
      }
    },
    [togglesParams, updateGlobals]
  );

  const setToggle = useCallback(
    (id: string, value: boolean, forcedUpdate = false) => {
      setHasChanges(true);
      setToggles({
        ...defaultToggles,
        ...globals.toggles,
        [id]: value,
      }, forcedUpdate)
    },
    [setToggles, globals.toggles]
  );

  const resetToggles = (forcedUpdate?: boolean) => {
    setHasChanges(false);
    setToggles(defaultToggles, forcedUpdate);
  }

  useEffect(() => {
    if (!togglesParams) return;

    const setDefaultToggles = () => {
      setToggles(defaultToggles, true);
    };

    setDefaultToggles();

    api.on(CURRENT_STORY_WAS_SET, setDefaultToggles);
    api.on(SET_STORIES, setDefaultToggles);
    return () => {
      api.off(CURRENT_STORY_WAS_SET, setDefaultToggles);
      api.off(SET_STORIES, setDefaultToggles);
    }
  }, [defaultToggles]);

  if (!togglesParams || togglesParams.disabled || togglesParams.options?.length === 0) return null;

  const options = togglesParams.options.map(({ disabled, id, ...option}) => {
    const newDisabled = typeof disabled !== 'object' ? disabled :
      Object.entries(disabled).filter(([key]) => key !== id).some(([key, value]) => {
        return globals.toggles && globals.toggles[key] === value;
      })

    return { ...option, id, disabled: newDisabled };
  });

  return (
    <WithTooltip
      placement="top"
      trigger="click"
      startOpen={false}
      visible={expanded}
      closeOnOutsideClick
      onVisibleChange={setExpanded}
      tooltip={
        <Tooltip
          hasChanges={hasChanges}
          toggles={globals.toggles}
          setToggle={setToggle}
          resetToggles={resetToggles}
          options={options}
          clearable={togglesParams.clearable}
        />
      }
    >
      <IconButton
        id={iconBtnId}
        key={TOOL_ID}
        active={expanded}
        title="Toggle options"
        onClick={() => setExpanded(true)}
      >
        <FormIcon />
      </IconButton>
    </WithTooltip>
  );
};
