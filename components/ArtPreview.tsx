import React from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {rem, colors} from '../shared/style';

export type ArtPreviewProps = React.PropsWithoutRef<{
  title: string;
  artist: string;
  price: number;
  uri: string;
  style?: StyleProp<ViewStyle>;
}>;

export const ArtPreview: React.FC<ArtPreviewProps> = function ({
  title,
  artist,
  price,
  uri,
  style,
}) {
  const formattedPrice: string = price.toFixed(2);
  return (
    <View style={[artPreviewStyles.container, style]}>
      <Image
        source={{
          uri,
        }}
        style={artPreviewStyles.image}
      />
      <Text style={artPreviewStyles.title}>{title}</Text>
      <Text style={artPreviewStyles.info}>{artist}</Text>
      <Text style={artPreviewStyles.price}>{formattedPrice}</Text>
    </View>
  );
};

const artPreviewStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  title: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: 1.25 * rem,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    paddingTop: 0.5 * rem,
  },
  info: {
    color: colors.textLight,
    fontSize: rem,
  },
  price: {
    color: colors.text,
    fontSize: 1.25 * rem,
    fontWeight: 'bold',
    paddingTop: 0.25 * rem,
    paddingBottom: 0.25 * rem,
  },
  image: {
    aspectRatio: 1,
    resizeMode: 'cover',
    width: 'auto',
    height: 'auto',
  },
});
