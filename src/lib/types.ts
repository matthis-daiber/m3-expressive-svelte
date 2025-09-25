//#region M3 Tokens - Typography
export interface TypographyProperties {
  'font-family-name': string;
  'font-weight': string;
  'font-size': string;
  'line-height': string;
  'letter-spacing': string;
}

export type TypescaleRole =
  | 'display-large'
  | 'display-medium'
  | 'display-small'
  | 'headline-large'
  | 'headline-medium'
  | 'headline-small'
  | 'title-large'
  | 'title-medium'
  | 'title-small'
  | 'body-large'
  | 'body-medium'
  | 'body-small'
  | 'label-large'
  | 'label-medium'
  | 'label-small';

export type TypographyTokens = Record<TypescaleRole, TypographyProperties>;
//#endregion

//#region M3 Tokens - Color
export type ColorTokens = ("primaryPaletteKeyColor" | "secondaryPaletteKeyColor" | "tertiaryPaletteKeyColor" | "neutralPaletteKeyColor" | "neutralVariantPaletteKeyColor" | "background" | "onBackground" | "surface" | "surfaceDim" | "surfaceBright" | "surfaceContainerLowest" | "surfaceContainerLow" | "surfaceContainer" | "surfaceContainerHigh" | "surfaceContainerHighest" | "onSurface" | "surfaceVariant" | "onSurfaceVariant" | "inverseSurface" | "inverseOnSurface" | "outline" | "outlineVariant" | "shadow" | "scrim" | "surfaceTint" | "primary" | "onPrimary" | "primaryContainer" | "onPrimaryContainer" | "inversePrimary" | "secondary" | "onSecondary" | "secondaryContainer" | "onSecondaryContainer" | "tertiary" | "onTertiary" | "tertiaryContainer" | "onTertiaryContainer" | "error" | "onError" | "errorContainer" | "onErrorContainer" | "primaryFixed" | "primaryFixedDim" | "onPrimaryFixed" | "onPrimaryFixedVariant" | "secondaryFixed" | "secondaryFixedDim" | "onSecondaryFixed" | "onSecondaryFixedVariant" | "tertiaryFixed" | "tertiaryFixedDim" | "onTertiaryFixed" | "onTertiaryFixedVariant")[];
//#endregion


















