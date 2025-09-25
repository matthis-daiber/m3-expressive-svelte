import { writable, derived } from 'svelte/store';
import {
  argbFromHex,
  hexFromArgb,
  SchemeExpressive,
  Hct
} from '@material/material-color-utilities';
import type { ColorTokens, TypographyTokens } from './types.ts';


const colorTokens: ColorTokens = [
  "primaryPaletteKeyColor",
  "secondaryPaletteKeyColor",
  "tertiaryPaletteKeyColor",
  "neutralPaletteKeyColor",
  "neutralVariantPaletteKeyColor",
  "background",
  "onBackground",
  "surface",
  "surfaceDim",
  "surfaceBright",
  "surfaceContainerLowest",
  "surfaceContainerLow",
  "surfaceContainer",
  "surfaceContainerHigh",
  "surfaceContainerHighest",
  "onSurface",
  "surfaceVariant",
  "onSurfaceVariant",
  "inverseSurface",
  "inverseOnSurface",
  "outline",
  "outlineVariant",
  "shadow",
  "scrim",
  "surfaceTint",
  "primary",
  "onPrimary",
  "primaryContainer",
  "onPrimaryContainer",
  "inversePrimary",
  "secondary",
  "onSecondary",
  "secondaryContainer",
  "onSecondaryContainer",
  "tertiary",
  "onTertiary",
  "tertiaryContainer",
  "onTertiaryContainer",
  "error",
  "onError",
  "errorContainer",
  "onErrorContainer",
  "primaryFixed",
  "primaryFixedDim",
  "onPrimaryFixed",
  "onPrimaryFixedVariant",
  "secondaryFixed",
  "secondaryFixedDim",
  "onSecondaryFixed",
  "onSecondaryFixedVariant",
  "tertiaryFixed",
  "tertiaryFixedDim",
  "onTertiaryFixed",
  "onTertiaryFixedVariant"
];

const typographyTokens: TypographyTokens = {
  // Display styles
  'display-large': {
    'font-family': 'Roboto',
    'font-weight': '400',
    'font-size': '3.5625rem', // 57pt
    'line-height': '4rem', // 64pt
    'letter-spacing': '-0.015625rem', // -0.25pt
  },
  'display-medium': {
    'font-family': 'Roboto',
    'font-weight': '400',
    'font-size': '2.8125rem', // 45pt
    'line-height': '3.25rem', // 52pt
    'letter-spacing': '0rem', // 0pt
  },
  'display-small': {
    'font-family': 'Roboto',
    'font-weight': '400',
    'font-size': '2.25rem', // 36pt
    'line-height': '2.75rem', // 44pt
    'letter-spacing': '0rem', // 0pt
  },

  // Headline styles
  'headline-large': {
    'font-family': 'Roboto',
    'font-weight': '400',
    'font-size': '2rem', // 32pt
    'line-height': '2.5rem', // 40pt
    'letter-spacing': '0rem', // 0pt
  },
  'headline-medium': {
    'font-family': 'Roboto',
    'font-weight': '400',
    'font-size': '1.75rem', // 28pt
    'line-height': '2.25rem', // 36pt
    'letter-spacing': '0rem', // 0pt
  },
  'headline-small': {
    'font-family': 'Roboto',
    'font-weight': '400',
    'font-size': '1.5rem', // 24pt
    'line-height': '2rem', // 32pt
    'letter-spacing': '0rem', // 0pt
  },

  // Title styles
  'title-large': {
    'font-family': 'Roboto',
    'font-weight': '400',
    'font-size': '1.375rem', // 22pt
    'line-height': '1.75rem', // 28pt
    'letter-spacing': '0rem', // 0pt
  },
  'title-medium': {
    'font-family': 'Roboto',
    'font-weight': '500',
    'font-size': '1rem', // 16pt
    'line-height': '1.5rem', // 24pt
    'letter-spacing': '0.009375rem', // 0.15pt
  },
  'title-small': {
    'font-family': 'Roboto',
    'font-weight': '500',
    'font-size': '0.875rem', // 14pt
    'line-height': '1.25rem', // 20pt
    'letter-spacing': '0.00625rem', // 0.1pt
  },

  // Body styles
  'body-large': {
    'font-family': 'Roboto',
    'font-weight': '400',
    'font-size': '1rem', // 16pt
    'line-height': '1.5rem', // 24pt
    'letter-spacing': '0.03125rem', // 0.5pt
  },
  'body-medium': {
    'font-family': 'Roboto',
    'font-weight': '400',
    'font-size': '0.875rem', // 14pt
    'line-height': '1.25rem', // 20pt
    'letter-spacing': '0.015625rem', // 0.25pt
  },
  'body-small': {
    'font-family': 'Roboto',
    'font-weight': '400',
    'font-size': '0.75rem', // 12pt
    'line-height': '1rem', // 16pt
    'letter-spacing': '0.025rem', // 0.4pt
  },

  // Label styles
  'label-large': {
    'font-family': 'Roboto',
    'font-weight': '500',
    'font-size': '0.875rem', // 14pt
    'line-height': '1.25rem', // 20pt
    'letter-spacing': '0.00625rem', // 0.1pt
  },
  'label-medium': {
    'font-family': 'Roboto',
    'font-weight': '500',
    'font-size': '0.75rem', // 12pt
    'line-height': '1rem', // 16pt
    'letter-spacing': '0.03125rem', // 0.5pt
  },
  'label-small': {
    'font-family': 'Roboto',
    'font-weight': '500',
    'font-size': '0.6875rem', // 11pt
    'line-height': '1rem', // 16pt
    'letter-spacing': '0.03125rem', // 0.5pt
  },
};

const emphasisedTypographyTokens: TypographyTokens = {
  // Display styles
  'display-large': {
    'font-family': 'Roboto',
    'font-weight': '500',
    'font-size': '3.5625rem', // 57pt
    'line-height': '4rem', // 64pt
    'letter-spacing': '-0.015625rem', // -0.25pt
  },
  'display-medium': {
    'font-family': 'Roboto',
    'font-weight': '500',
    'font-size': '2.8125rem', // 45pt
    'line-height': '3.25rem', // 52pt
    'letter-spacing': '0rem',
  },
  'display-small': {
    'font-family': 'Roboto',
    'font-weight': '500',
    'font-size': '2.25rem', // 36pt
    'line-height': '2.75rem', // 44pt
    'letter-spacing': '0rem',
  },

  // Headline styles
  'headline-large': {
    'font-family': 'Roboto',
    'font-weight': '500',
    'font-size': '2rem', // 32pt
    'line-height': '2.5rem', // 40pt
    'letter-spacing': '0rem',
  },
  'headline-medium': {
    'font-family': 'Roboto',
    'font-weight': '500',
    'font-size': '1.75rem', // 28pt
    'line-height': '2.25rem', // 36pt
    'letter-spacing': '0rem',
  },
  'headline-small': {
    'font-family': 'Roboto',
    'font-weight': '500',
    'font-size': '1.5rem', // 24pt
    'line-height': '2rem', // 32pt
    'letter-spacing': '0rem',
  },

  // Title styles
  'title-large': {
    'font-family': 'Roboto',
    'font-weight': '500',
    'font-size': '1.375rem', // 22pt
    'line-height': '1.75rem', // 28pt
    'letter-spacing': '0rem',
  },
  'title-medium': {
    'font-family': 'Roboto',
    'font-weight': '700',
    'font-size': '1rem', // 16pt
    'line-height': '1.5rem', // 24pt
    'letter-spacing': '0.009375rem', // 0.15pt
  },
  'title-small': {
    'font-family': 'Roboto',
    'font-weight': '700',
    'font-size': '0.875rem', // 14pt
    'line-height': '1.25rem', // 20pt
    'letter-spacing': '0.00625rem', // 0.1pt
  },

  // Body styles
  'body-large': {
    'font-family': 'Roboto',
    'font-weight': '500',
    'font-size': '1rem', // 16pt
    'line-height': '1.5rem', // 24pt
    'letter-spacing': '0.03125rem', // 0.5pt
  },
  'body-medium': {
    'font-family': 'Roboto',
    'font-weight': '500',
    'font-size': '0.875rem', // 14pt
    'line-height': '1.25rem', // 20pt
    'letter-spacing': '0.015625rem', // 0.25pt
  },
  'body-small': {
    'font-family': 'Roboto',
    'font-weight': '500',
    'font-size': '0.75rem', // 12pt
    'line-height': '1rem', // 16pt
    'letter-spacing': '0.025rem', // 0.4pt
  },

  // Label styles
  'label-large': {
    'font-family': 'Roboto',
    'font-weight': '700',
    'font-size': '0.875rem', // 14pt
    'line-height': '1.25rem', // 20pt
    'letter-spacing': '0.00625rem', // 0.1pt
  },
  'label-medium': {
    'font-family': 'Roboto',
    'font-weight': '700',
    'font-size': '0.75rem', // 12pt
    'line-height': '1rem', // 16pt
    'letter-spacing': '0.03125rem', // 0.5pt
  },
  'label-small': {
    'font-family': 'Roboto',
    'font-weight': '700',
    'font-size': '0.6875rem', // 11pt
    'line-height': '1rem', // 16pt
    'letter-spacing': '0.03125rem', // 0.5pt
  },
};

function minifyCss(css: string): string {
  return css.replace(/\s+/g, ' ').trim();
}

function createCssNameForTypography(typographyName: string, property: string, emphasised: boolean = false): string {
  return `--md-sys-typescale-${typographyName}-${property}${emphasised ? '-em' : ''}`;
}

function createTypographyPropertyCss(tokens: TypographyTokens, emphasised: boolean = false): string {
  let css = '';
  for (const [typographyName, properties] of Object.entries(tokens)) {
    for (const [property, value] of Object.entries(properties)) {
      css += `${createCssNameForTypography(typographyName, property, emphasised)}: ${value};\n`;
    }
  }
  return css;
}

function createTypographyClassesCss(): string {
  let css = '';
  for (const typographyName of Object.keys(typographyTokens)) {
    css += `.${typographyName} {   
      font-family: var(${createCssNameForTypography(typographyName, 'font-family')}), "Helvetica Neue", Arial, sans-serif;
      font-weight: var(${createCssNameForTypography(typographyName, 'font-weight')});
      font-size: var(${createCssNameForTypography(typographyName, 'font-size')});
      line-height: var(${createCssNameForTypography(typographyName, 'line-height')});
      letter-spacing: var(${createCssNameForTypography(typographyName, 'letter-spacing')});
    }\n`;
  }
  for (const typographyName of Object.keys(emphasisedTypographyTokens)) {
    css += `.${typographyName}-em {   
      font-family: var(${createCssNameForTypography(typographyName, 'font-family', true)}), "Helvetica Neue", Arial, sans-serif;
      font-weight: var(${createCssNameForTypography(typographyName, 'font-weight', true)});
      font-size: var(${createCssNameForTypography(typographyName, 'font-size', true)});
      line-height: var(${createCssNameForTypography(typographyName, 'line-height', true)});
      letter-spacing: var(${createCssNameForTypography(typographyName, 'letter-spacing', true)});
    }\n`;
  }
  return css;
}

function camelToKebabCase(str: string) {
  return str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
}

export const seedColor = writable('#6750A4');

export const themeColorCss = derived(seedColor, ($seedColor) => {
  const argb = argbFromHex($seedColor);
  const colorCss = toCss(Hct.fromInt(argb)).join('\n');
  return minifyCss(`
        :root {
            color-scheme: light dark;
            ${colorCss}
        }
    `);
});

export const themeTypographyPropertiesCss = () => {
  const typographyCss = createTypographyPropertyCss(typographyTokens);
  const emphasisedTypographyCss = createTypographyPropertyCss(emphasisedTypographyTokens, true);
  return minifyCss(`
        :root {
            ${typographyCss}
            ${emphasisedTypographyCss}
        }
    `);
};

export const themeTypographyClassesCss = () => {
  const typographyClassesCss = createTypographyClassesCss();
  return minifyCss(typographyClassesCss);
};

const toCssVar = (name: string, lightValue: number, darkValue: number) =>
  `--md-sys-color-${camelToKebabCase(name)}: light-dark(${hexFromArgb(lightValue)}, ${hexFromArgb(darkValue)});`;
const toCss = (argb: Hct) => {
  const light = new SchemeExpressive(argb, false, 0);
  console.log(light);
  const dark = new SchemeExpressive(argb, true, 0);
  const css: string[] = [];
  colorTokens.forEach((name) => {
    css.push(toCssVar(
      name,
      light[name],
      dark[name]
    ));
  });
  return css;
};
