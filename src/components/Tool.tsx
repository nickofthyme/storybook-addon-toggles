import React, { useEffect, useCallback, useState, useRef, FC, useMemo } from "react";
import { API, useGlobals, useParameter } from "@storybook/api";
import { Icons, IconButton, WithTooltip } from '@storybook/components';

import { TOOL_ID } from "../constants";
import { Parameters, Toggles } from '../types';
import { Tooltip } from "./Tooltip";
import { CURRENT_STORY_WAS_SET, SET_STORIES } from "@storybook/core-events";

interface Props {
  api: API;
}

const iconBtnId = "storybook-addon-toggles-icon-btn";

export const Tool: FC<Props> = ({ api }) => {
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
    (id:string, value: boolean, forcedUpdate = false) => {
      setToggles({
        ...defaultToggles,
        ...globals.toggles,
        [id]: value,
      }, forcedUpdate)
    },
    [setToggles, globals.toggles]
  );

  const resetToggles = (forcedUpdate?: boolean) => {
    setToggles(defaultToggles, forcedUpdate);
  }

  useEffect(() => {
    if (!togglesParams) return;

    const setDefaultToggles = () => {
      if (togglesParamsRef.current) {
        const rawToggles = getTogglesFromUrl(togglesParamsRef.current) ?? '{}';
        const toggles = JSON.parse(rawToggles);
        setToggles({...defaultToggles, ...toggles }, true);
      } else {
        setToggles(defaultToggles, true);
      }
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
      tooltipShown={expanded}
      onVisibilityChange={setExpanded}
      tooltip={
        <Tooltip
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
        active={true}
        title="Toggle options"
        onClick={() => setExpanded(true)}
      >
        <Icons icon={togglesParams.icon ?? 'form'} />
      </IconButton>
    </WithTooltip>
  );
};

/**
 * Strip and validate toggles id from globals query param
 * This is needed as the initial globals are ALWAYS empty
 */
function getTogglesFromUrl({ ignoreQueryParams }: Parameters) {
  if (ignoreQueryParams ?? true) return '{}';

  const re = /toggles:([^;]*)/;
  const globals = new URL(window.location.toString()).searchParams.get('globals') ?? '';
  const [, toggles] = re.exec(globals) ?? [];
  return toggles;
}
