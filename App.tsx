/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ArtPreviewList} from './components/ArtPreviewList';

type ImageData = {
  title: string;
  artist: string;
  price: number;
  uri: string;
};

const images: ImageData[] = [
  {
    title: 'Bouquet',
    artist: 'Amelie von Prunkenstern',
    price: 405,
    uri: 'https://source.unsplash.com/5TK1F5VfdIk',
  },
  {
    title: 'Urban',
    artist: 'Isabella Sturmhardt',
    price: 270,
    uri: 'https://source.unsplash.com/yu68fUQDvOI',
  },
  {
    title: 'Einblicke',
    artist: 'Frank Wolf',
    price: 220,
    uri: 'https://source.unsplash.com/fT49QnFucQ8',
  },
  {
    title: 'In der Tiefe',
    artist: 'Jean Claude',
    price: 270,
    uri: 'https://source.unsplash.com/3Sf_G9m0gcQ',
  },
  {
    title: 'Spring',
    artist: 'Irina Angus',
    price: 333,
    uri: 'https://source.unsplash.com/YoK5pBcSY8s',
  },
];

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ArtPreviewList images={images} />
    </SafeAreaView>
  );
}

export default App;
