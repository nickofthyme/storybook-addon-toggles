export type ToggleKey = string;
export type ToggleValue = boolean
export type Toggles = Record<string, ToggleValue>;

export interface ToggleOptions<T extends string = string> {
  /**
   * id of the toggle
   */
  id: T;
  /**
   * Title of the toggle in Selector UI
   */
  title?: string;
  /**
   * Description of the toggle, shows in title on hover
   */
  description?: string;
  /**
   * Default value
   */
  defaultValue: ToggleValue;
  /**
   * Disable toggle by boolean or list of dependent toggles
   */
  disabled?: boolean | Toggles;
}

export interface Parameters<ToggleId extends string = string> {
  /**
   * Toggle options
   */
  options: ToggleOptions<ToggleId>[];
  /**
   * Toggle default overrides from story level
   */
  overrides: Record<ToggleId, boolean>;
  /**
   * Enabled clearing all toggles to default values
   *
   * @default true
   */
  clearable?: boolean;
  /**
   * Addon is disabled at story level
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * A callback that will be executed when the toggles change
   */
  onChange?: (Toggles?: Toggles) => void;
}

/**
 * Parameters to be applied **gloabally** to configure toggles for toggles addon
 */
export interface TogglesParameter {
  toggles?: Omit<Parameters, 'overrides'>;
}

/**
 * Parameters to be applied at a **story level** to configure toggles for toggles addon
 *
 * This is just type omission to somewhat prevent users from defining parameters that
 * could negatively affect the addon behavior across all stories.
 */
 export interface StoryTogglesParameter {
  toggles?: Pick<Parameters, 'overrides' | 'disabled' | 'clearable'>;
 }

export interface TogglesGlobals {
  /**
   * Active toggle values
   */
  toggles: Toggles;
}
