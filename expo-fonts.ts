// expo-fonts.js

import * as Font from 'expo-font';

export const loadFonts = async () => {
  await Font.loadAsync({
    'primary': require('./assets/fonts/CormorantUpright-Regular.ttf'),
    'secondary':require('./assets/fonts/NotoSans-Light.ttf'),
    'ternary':require('./assets/fonts/OpenSans-Medium.ttf'),
    'cursive':require('./assets/fonts/Sacramento-Regular.ttf'),
    // Add more font variants if needed
  });
};
