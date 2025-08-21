import React from "react";
import { addons, types } from "storybook/manager-api";

import { Tool } from "./components/Tool";
import { ADDON_ID, TOOL_ID } from "./constants";

addons.register(ADDON_ID, (api) => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: "Option toggles",
    match: ({ viewMode }) => viewMode === 'story',
    render: () => <Tool api={api} />,
  });
});
