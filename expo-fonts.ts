// expo-fonts.js

import * as Font from 'expo-font';

export const loadFonts = async () => {
  await Font.loadAsync({
    'primary': require('./assets/fonts/CormorantUpright-Regular.ttf'),
    'secondary':require('./assets/fonts/NotoSans-Light.ttf'),
    'ternary':require('./assets/fonts/OpenSans-Medium.ttf'),
    // Add more font variants if needed
  });
};
