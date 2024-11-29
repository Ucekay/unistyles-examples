# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo run:ios
   ```
   or
   ```bash
    npx expo run:android
   ```

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Using Unistyles

This project uses `react-native-unistyles` for theming and styling. Here is how you can use it:

1. Define your themes in `unistyles.ts`:

   ```typescript
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
   ```

2. Use the themed styles in your components:

   ```tsx
   import { View, Text } from 'react-native';
   import { StyleSheet } from 'react-native-unistyles';

   const MyComponent = () => {
     return (
       <View style={styles.container}>
         <Text style={styles.text}>Hello, Unistyles!</Text>
       </View>
     );
   };

   const styles = StyleSheet.create((theme) => ({
     container: {
       backgroundColor: theme.colors.background,
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
     },
     text: {
       color: theme.colors.text,
     },
   }));

   export default MyComponent;
   ```

3. Customize themes dynamically:

   ```tsx
   import { UnistylesRuntime } from 'react-native-unistyles';

   UnistylesRuntime.updateTheme('light', (currentTheme) => ({
     ...currentTheme,
     colors: {
       ...currentTheme.colors,
       background: '#f0f0f0',
     },
   }));
   ```

## Modify Main Entry

Expo Router resolves routes differently than expected. Also, Unistyles 3.0 parses your StyleSheets as soon as you import the file containing it. This combination may cause some issues. To prevent that, you need to modify your main entry file:

1. Update `package.json`:

   ```json
   {
     "main": "index.js"
   }
   ```

2. Create `index.js` file with the following content:

   ```javascript
   import 'expo-router/entry';
   import './unistyles'; // <-- file that initializes Unistyles
   ```

With this setup, we will ensure that Unistyles is initialized before any other component.

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
