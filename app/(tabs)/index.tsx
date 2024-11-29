import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { UnistyledText } from '@/components/UnistyledText';
import { UnistyledView } from '@/components/UnistyledView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <UnistyledView style={styles.titleContainer}>
        <UnistyledText type="title">Welcome!</UnistyledText>
        <HelloWave />
      </UnistyledView>
      <UnistyledView style={styles.stepContainer}>
        <UnistyledText type="subtitle">Step 1: Try it</UnistyledText>
        <UnistyledText>
          Edit <UnistyledText type="defaultSemiBold">app/(tabs)/index.tsx</UnistyledText> to see changes.
          Press{' '}
          <UnistyledText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </UnistyledText>{' '}
          to open developer tools.
        </UnistyledText>
      </UnistyledView>
      <UnistyledView style={styles.stepContainer}>
        <UnistyledText type="subtitle">Step 2: Explore</UnistyledText>
        <UnistyledText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </UnistyledText>
      </UnistyledView>
      <UnistyledView style={styles.stepContainer}>
        <UnistyledText type="subtitle">Step 3: Get a fresh start</UnistyledText>
        <UnistyledText>
          When you're ready, run{' '}
          <UnistyledText type="defaultSemiBold">npm run reset-project</UnistyledText> to get a fresh{' '}
          <UnistyledText type="defaultSemiBold">app</UnistyledText> directory. This will move the current{' '}
          <UnistyledText type="defaultSemiBold">app</UnistyledText> to{' '}
          <UnistyledText type="defaultSemiBold">app-example</UnistyledText>.
        </UnistyledText>
      </UnistyledView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
