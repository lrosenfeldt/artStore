/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback} from 'react';
import {Button, SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {trigger} from 'react-native-haptic-feedback';

// Optional configuration

import {QueryProvider} from './api/queryClient';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ArtPreviewList} from './components/ArtPreviewList';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onPress = useCallback(() => {
    const options = {
      enableVibrateFallback: true,
      ignoreAndroidSystemSettings: false,
    };
    trigger('impactLight', options);
  }, []);

  return (
    <QueryProvider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Button title="Click me" onPress={onPress} />
        <ArtPreviewList />
      </SafeAreaView>
    </QueryProvider>
  );
}

export default App;
