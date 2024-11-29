import { StyleSheet } from 'react-native-unistyles';

type AppThemes = typeof appThemes;

declare module 'react-native-unistyles' {
	export interface UnistylesThemes extends AppThemes {}
}

const lightTheme = {
	colors: {
		text: '#11181C',
		background: '#fff',
		icon: '#687076',
	},
};

const darkTheme = {
	colors: {
		text: '#ECEDEE',
		background: '#151718',
		icon: '#9BA1A6',
	},
};

const appThemes = {
	light: lightTheme,
	dark: darkTheme,
};

const settings = {
	adaptiveThemes: true,
};

StyleSheet.configure({
	themes: appThemes,
	settings,
});
