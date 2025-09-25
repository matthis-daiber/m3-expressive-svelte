import fs from 'fs';
import {
	themeFromSourceColor,
	argbFromHex
} from '@material/material-color-utilities';

function camelToKebab(str) {
	return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

const seedColor = '#6750A4';
const theme = themeFromSourceColor(argbFromHex(seedColor));
const lightScheme = theme.schemes.light.toJSON();

const customDataProperties = Object.keys(lightScheme).map((key) => {
	const kebabKey = camelToKebab(key);
	return {
		name: `--md-sys-color-${kebabKey}`,
		syntax: '<color>',
		description: `Material Design token for: ${key}`
	};
});

const vsCodeCustomData = {
	version: 1.1,
	properties: customDataProperties
};

// Generate VS Code custom data
fs.mkdirSync('.vscode', { recursive: true });
fs.writeFileSync('.vscode/css.customData.json', JSON.stringify(vsCodeCustomData, null, 2));

// Generate CSS token declarations for autocomplete
const cssDeclarations = Object.keys(lightScheme).map((key) => {
	const kebabKey = camelToKebab(key);
	return `  --md-sys-color-${kebabKey}: ;`;
}).join('\n');

const cssContent = `/* 
 * Material Design 3 Token Declarations for VS Code Autocomplete
 * This file is only for development autocomplete support.
 * The actual values are generated at runtime by Theme.svelte
 */

:root {
${cssDeclarations}
}`;

fs.mkdirSync('src/lib', { recursive: true });
fs.writeFileSync('src/lib/md-tokens.css', cssContent);

console.log('✅ VS Code custom data generated.');
console.log('✅ CSS token declarations generated for autocomplete.');
