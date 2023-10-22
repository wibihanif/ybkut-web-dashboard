import { MantineThemeComponents } from '@mantine/styles/lib/theme/types/MantineTheme';

// Note: Overridden components must be of type 'ThemeComponent' and cannot be imported from other files
export const OverridedComponents: MantineThemeComponents = {
  InputWrapper: {
    styles: () => ({
      label: {
        fontSize: '1rem',
        fontWeight: 'bold',
        marginBottom: '0.125rem',
      },
    }),
  },
};
