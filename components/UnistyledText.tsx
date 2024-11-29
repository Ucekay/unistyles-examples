import { Text, type TextProps } from 'react-native';

import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';

import { useThemeColor } from '@/hooks/useThemeColor';

export type UnistyledTextProps = TextProps & {
	lightColor?: string;
	darkColor?: string;
	type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function UnistyledText({
	style,
	lightColor,
	darkColor,
	type = 'default',
	...rest
}: UnistyledTextProps) {
	if (lightColor) {
		UnistylesRuntime.updateTheme('light', (currentTheme) => ({
			...currentTheme,
			colors: {
				...currentTheme.colors,
				text: lightColor,
			},
		}));
	}
	if (darkColor) {
		UnistylesRuntime.updateTheme('dark', (currentTheme) => ({
			...currentTheme,
			colors: {
				...currentTheme.colors,
				text: darkColor,
			},
		}));
	}

	return (
		<Text
			style={[
				styles.color,
				type === 'default' ? styles.default : undefined,
				type === 'title' ? styles.title : undefined,
				type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
				type === 'subtitle' ? styles.subtitle : undefined,
				type === 'link' ? styles.link : undefined,
				style,
			]}
			{...rest}
		/>
	);
}

const styles = StyleSheet.create((theme) => ({
	default: {
		fontSize: 16,
		lineHeight: 24,
	},
	defaultSemiBold: {
		fontSize: 16,
		lineHeight: 24,
		fontWeight: '600',
	},
	title: {
		fontSize: 32,
		fontWeight: 'bold',
		lineHeight: 32,
	},
	subtitle: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	link: {
		lineHeight: 30,
		fontSize: 16,
		color: '#0a7ea4',
	},
	color: {
		color: theme.colors.text,
	},
}));
