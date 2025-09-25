import { writable, derived } from 'svelte/store';
import { argbFromHex, Hct, hexFromArgb, SchemeExpressive } from '@material/material-color-utilities';
import type { TypographyTokens, ColorTokens } from '$lib/types.ts';


const FONT_FAMILY_SANS = '"Roboto", "Helvetica Neue", Arial, sans-serif';

export const colorTokens: ColorTokens = [
  'primary', 'onPrimary', 'primaryContainer', 'onPrimaryContainer',
  'secondary', 'onSecondary', 'secondaryContainer', 'onSecondaryContainer',
  'tertiary', 'onTertiary', 'tertiaryContainer', 'onTertiaryContainer',
  'error', 'onError', 'errorContainer', 'onErrorContainer',
  'background', 'onBackground',
  'surface', 'onSurface',
  'surfaceVariant', 'onSurfaceVariant',
  'outline', 'outlineVariant',
  'shadow', 'scrim', 'inverseSurface', 'inverseOnSurface', 'inversePrimary',
  'surfaceDim', 'surfaceBright',
  'surfaceContainerLowest', 'surfaceContainerLow', 'surfaceContainer',
  'surfaceContainerHigh', 'surfaceContainerHighest',
  'primaryFixed', 'primaryFixedDim', 'onPrimaryFixed', 'onPrimaryFixedVariant',
  'secondaryFixed', 'secondaryFixedDim', 'onSecondaryFixed', 'onSecondaryFixedVariant',
  'tertiaryFixed', 'tertiaryFixedDim', 'onTertiaryFixed', 'onTertiaryFixedVariant',
];

const typographyTokens: TypographyTokens = {
  // Display styles
  'display-large': {
    'font-family-name': FONT_FAMILY_SANS,
    'font-weight': '400',
    'font-size': '3.5625rem', // 57pt
    'line-height': '4rem', // 64pt
    'letter-spacing': '-0.015625rem', // -0.25pt
  },
  'display-medium': {
    'font-family-name': FONT_FAMILY_SANS,
    'font-weight': '400',
    'font-size': '2.8125rem', // 45pt
    'line-height': '3.25rem', // 52pt
    'letter-spacing': '0rem', // 0pt
  },
  'display-small': {
    'font-family-name': FONT_FAMILY_SANS,
    'font-weight': '400',
    'font-size': '2.25rem', // 36pt
    'line-height': '2.75rem', // 44pt
    'letter-spacing': '0rem', // 0pt
  },

  // Headline styles
  'headline-large': {
    'font-family-name': FONT_FAMILY_SANS,
    'font-weight': '400',
    'font-size': '2rem', // 32pt
    'line-height': '2.5rem', // 40pt
    'letter-spacing': '0rem', // 0pt
  },
  'headline-medium': {
    'font-family-name': FONT_FAMILY_SANS,
    'font-weight': '400',
    'font-size': '1.75rem', // 28pt
    'line-height': '2.25rem', // 36pt
    'letter-spacing': '0rem', // 0pt
  },
  'headline-small': {
    'font-family-name': FONT_FAMILY_SANS,
    'font-weight': '400',
    'font-size': '1.5rem', // 24pt
    'line-height': '2rem', // 32pt
    'letter-spacing': '0rem', // 0pt
  },

  // Title styles
  'title-large': {
    'font-family-name': FONT_FAMILY_SANS,
    'font-weight': '400',
    'font-size': '1.375rem', // 22pt
    'line-height': '1.75rem', // 28pt
    'letter-spacing': '0rem', // 0pt
  },
  'title-medium': {
    'font-family-name': FONT_FAMILY_SANS,
    'font-weight': '500',
    'font-size': '1rem', // 16pt
    'line-height': '1.5rem', // 24pt
    'letter-spacing': '0.009375rem', // 0.15pt
  },
  'title-small': {
    'font-family-name': FONT_FAMILY_SANS,
    'font-weight': '500',
    'font-size': '0.875rem', // 14pt
    'line-height': '1.25rem', // 20pt
    'letter-spacing': '0.00625rem', // 0.1pt
  },

  // Body styles
  'body-large': {
    'font-family-name': FONT_FAMILY_SANS,
    'font-weight': '400',
    'font-size': '1rem', // 16pt
    'line-height': '1.5rem', // 24pt
    'letter-spacing': '0.03125rem', // 0.5pt
  },
  'body-medium': {
    'font-family-name': FONT_FAMILY_SANS,
    'font-weight': '400',
    'font-size': '0.875rem', // 14pt
    'line-height': '1.25rem', // 20pt
    'letter-spacing': '0.015625rem', // 0.25pt
  },
  'body-small': {
    'font-family-name': FONT_FAMILY_SANS,
    'font-weight': '400',
    'font-size': '0.75rem', // 12pt
    'line-height': '1rem', // 16pt
    'letter-spacing': '0.025rem', // 0.4pt
  },

  // Label styles
  'label-large': {
    'font-family-name': FONT_FAMILY_SANS,
    'font-weight': '500',
    'font-size': '0.875rem', // 14pt
    'line-height': '1.25rem', // 20pt
    'letter-spacing': '0.00625rem', // 0.1pt
  },
  'label-medium': {
    'font-family-name': FONT_FAMILY_SANS,
    'font-weight': '500',
    'font-size': '0.75rem', // 12pt
    'line-height': '1rem', // 16pt
    'letter-spacing': '0.03125rem', // 0.5pt
  },
  'label-small': {
    'font-family-name': FONT_FAMILY_SANS,
    'font-weight': '500',
    'font-size': '0.6875rem', // 11pt
    'line-height': '1rem', // 16pt
    'letter-spacing': '0.03125rem', // 0.5pt
  },
};

const emphasisedTypographyTokens: TypographyTokens = {
  // Display styles
  'display-large': {
    'font-family-name': FONT_FAMILY_SANS,
    'font-weight': '500',
    'font-size': '3.5625rem', // 57pt
    'line-height': '4rem', // 64pt
    'letter-spacing': '-0.015625rem', // -0.25pt
  },
  'display-medium': {
    'font-family-name': FONT_FAMILY_SANS,
    'font-weight': '500',
    'font-size': '2.8125rem', // 45pt
    'line-height': '3.25rem', // 52pt
    'letter-spacing': '0rem',
  },
  'display-small': {
    'font-family-name': FONT_FAMILY_SANS,
    'font-weight': '500',
    'font-size': '2.25rem', // 36pt
    'line-height': '2.75rem', // 44pt
    'letter-spacing': '0rem',
  },

  // Headline styles
  'headline-large': {
    'font-family-name': FONT_FAMILY_SANS,
    'font-weight': '500',
    'font-size': '2rem', // 32pt
    'line-height': '2.5rem', // 40pt
    'letter-spacing': '0rem',
  },
  'headline-medium': {
    'font-family-name': FONT_FAMILY_SANS,
    'font-weight': '500',
    'font-size': '1.75rem', // 28pt
    'line-height': '2.25rem', // 36pt
    'letter-spacing': '0rem',
  },
  'headline-small': {
    'font-family-name': FONT_FAMILY_SANS,
    'font-weight': '500',
    'font-size': '1.5rem', // 24pt
    'line-height': '2rem', // 32pt
    'letter-spacing': '0rem',
  },

  // Title styles
  'title-large': {
    'font-family-name': FONT_FAMILY_SANS,
    'font-weight': '500',
    'font-size': '1.375rem', // 22pt
    'line-height': '1.75rem', // 28pt
    'letter-spacing': '0rem',
  },
  'title-medium': {
    'font-family-name': FONT_FAMILY_SANS,
    'font-weight': '700',
    'font-size': '1rem', // 16pt
    'line-height': '1.5rem', // 24pt
    'letter-spacing': '0.009375rem', // 0.15pt
  },
  'title-small': {
    'font-family-name': FONT_FAMILY_SANS,
    'font-weight': '700',
    'font-size': '0.875rem', // 14pt
    'line-height': '1.25rem', // 20pt
    'letter-spacing': '0.00625rem', // 0.1pt
  },

  // Body styles
  'body-large': {
    'font-family-name': FONT_FAMILY_SANS,
    'font-weight': '500',
    'font-size': '1rem', // 16pt
    'line-height': '1.5rem', // 24pt
    'letter-spacing': '0.03125rem', // 0.5pt
  },
  'body-medium': {
    'font-family-name': FONT_FAMILY_SANS,
    'font-weight': '500',
    'font-size': '0.875rem', // 14pt
    'line-height': '1.25rem', // 20pt
    'letter-spacing': '0.015625rem', // 0.25pt
  },
  'body-small': {
    'font-family-name': FONT_FAMILY_SANS,
    'font-weight': '500',
    'font-size': '0.75rem', // 12pt
    'line-height': '1rem', // 16pt
    'letter-spacing': '0.025rem', // 0.4pt
  },

  // Label styles
  'label-large': {
    'font-family-name': FONT_FAMILY_SANS,
    'font-weight': '700',
    'font-size': '0.875rem', // 14pt
    'line-height': '1.25rem', // 20pt
    'letter-spacing': '0.00625rem', // 0.1pt
  },
  'label-medium': {
    'font-family-name': FONT_FAMILY_SANS,
    'font-weight': '700',
    'font-size': '0.75rem', // 12pt
    'line-height': '1rem', // 16pt
    'letter-spacing': '0.03125rem', // 0.5pt
  },
  'label-small': {
    'font-family-name': FONT_FAMILY_SANS,
    'font-weight': '700',
    'font-size': '0.6875rem', // 11pt
    'line-height': '1rem', // 16pt
    'letter-spacing': '0.03125rem', // 0.5pt
  },
}


function camelToKebabCase(str: string): string {
  return str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
}

function minifyCss(css: string): string {
  return css
    .replace(/\/\*(.|[\r\n])*?\*\//g, '')
    .replace(/\s*([,>+;:}{()\\])\s*/g, '$1')
    .replace(/\s\s+/g, ' ')
    .trim();
}

function generateTypographyCss(tokens: TypographyTokens, isEmphasised = false): { variables: string, classes: string } {
  let variablesCss = '';
  let classesCss = '';
  const suffix = isEmphasised ? '-em' : '';

  for (const [role, properties] of Object.entries(tokens)) {
    for (const [prop, value] of Object.entries(properties)) {
      variablesCss += `  --md-sys-typescale-${role}${suffix}-${prop}: ${value};\n`;
    }
    classesCss += `
      .typescale-${role}${suffix} {
        font-family: var(--md-sys-typescale-${role}${suffix}-font-family-name);
        font-weight: var(--md-sys-typescale-${role}${suffix}-font-weight);
        font-size: var(--md-sys-typescale-${role}${suffix}-font-size);
        line-height: var(--md-sys-typescale-${role}${suffix}-line-height);
        letter-spacing: var(--md-sys-typescale-${role}${suffix}-letter-spacing);
      }
    `;
  }
  return { variables: variablesCss, classes: classesCss };
}



export const seedColor = writable('#6750A4');

export const themeColorCss = derived(seedColor, ($seedColor) => {
  if (!$seedColor) return '';

  const sourceColor = Hct.fromInt(argbFromHex($seedColor));
  const lightScheme = new SchemeExpressive(sourceColor, false, 0);
  const darkScheme = new SchemeExpressive(sourceColor, true, 0);

  const colorVars = colorTokens
    .map((key) => {
      const name = camelToKebabCase(key);
      const lightValue = hexFromArgb(lightScheme[key]);
      const darkValue = hexFromArgb(darkScheme[key]);
      return `  --md-sys-color-${name}: light-dark(${lightValue}, ${darkValue});`;
    })
    .join('\n');

  const finalCss = `
    :root {
      color-scheme: light dark;
      ${colorVars}
    }`;

  return minifyCss(finalCss);
});

export const themeTypographyCss = derived([], () => {
  const standard = generateTypographyCss(typographyTokens);
  const emphasised = generateTypographyCss(emphasisedTypographyTokens, true);

  const finalCss = `
    :root {
      ${standard.variables}
      ${emphasised.variables}
    }
    ${standard.classes}
    ${emphasised.classes}
  `;

  return minifyCss(finalCss);
});

export const themeShapeCss = minifyCss(`
  :root {
    --md-sys-shape-corner-value-none: 0px;
    --md-sys-shape-corner-value-extra-small: 4px;
    --md-sys-shape-corner-value-small: 8px;
    --md-sys-shape-corner-value-medium: 12px;
    --md-sys-shape-corner-value-large: 16px;
    --md-sys-shape-corner-value-large-increased: 20px;
    --md-sys-shape-corner-value-extra-large: 28px;
    --md-sys-shape-corner-value-extra-large-increased: 32px;
    --md-sys-shape-corner-value-extra-extra-large: 48px;
    --md-sys-shape-corner-value-full: 9999px;
  } 
`);

export const themeShadowCss = minifyCss(`
  :root {
    --md-sys-shadow-level0: none;

    --md-sys-shadow-level1: light-dark(
      0px 1px 2px rgba(0,0,0,0.3), 0px 1px 3px 1px rgba(0,0,0,0.15),
      none
    );

    --md-sys-shadow-level2: light-dark(
      0px 1px 2px rgba(0,0,0,0.3), 0px 2px 6px 2px rgba(0,0,0,0.15),
      none
    );

    --md-sys-shadow-level3: light-dark(
      0px 4px 8px 3px rgba(0,0,0,0.15), 0px 1px 3px rgba(0,0,0,0.3),
      none
    );

    --md-sys-shadow-level4: light-dark(
      0px 6px 10px 4px rgba(0,0,0,0.15), 0px 2px 3px rgba(0,0,0,0.3),
      none
    );

    --md-sys-shadow-level5: light-dark(
      0px 8px 12px 6px rgba(0,0,0,0.15), 0px 4px 4px rgba(0,0,0,0.3),
      none
    );
  }
`);
