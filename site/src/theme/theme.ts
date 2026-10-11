import { DarkTheme, LightTheme } from 'baseui';

const fontFamily = '"new-spirit", serif';

const createAppTheme = (baseTheme: typeof LightTheme | typeof DarkTheme) => {
  const typography = Object.fromEntries(
    Object.entries(baseTheme.typography).map(([key, font]) => [
      key,
      { ...font, fontFamily },
    ]),
  ) as typeof LightTheme.typography;

  return { ...baseTheme, typography };
};

export const AppTheme = createAppTheme(LightTheme);
export const AppDarkTheme = createAppTheme(DarkTheme);

