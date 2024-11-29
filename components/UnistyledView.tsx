import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';

export type UnistyledViewProps = ViewProps & {
	lightColor?: string;
	darkColor?: string;
};

export function UnistyledView({
	style,
	lightColor,
	darkColor,
	...otherProps
}: UnistyledViewProps) {
	if (lightColor) {
		UnistylesRuntime.updateTheme('light', (currentTheme) => ({
			...currentTheme,
			colors: {
				...currentTheme.colors,
				background: lightColor,
			},
		}));
	}

	if (darkColor) {
		UnistylesRuntime.updateTheme('dark', (currentTheme) => ({
			...currentTheme,
			colors: {
				...currentTheme.colors,
				background: darkColor,
			},
		}));
	}

	return <View style={[styles.default, style]} {...otherProps} />;
}

const styles = StyleSheet.create((theme) => ({
	default: {
		backgroundColor: theme.colors.background,
	},
}));
