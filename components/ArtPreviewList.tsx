import {ListRenderItem} from '@react-native/virtualized-lists';
import React, {PropsWithoutRef} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {rem} from '../shared/style';
import {ArtPreview} from './ArtPreview';

export type ImageData = {
  title: string;
  artist: string;
  price: number;
  uri: string;
};

export type ArtPreviewListProps = PropsWithoutRef<{
  images: ImageData[];
}>;

export const ArtPreviewList: React.FC<ArtPreviewListProps> = function ({
  images,
}) {
  return (
    <FlatList
      data={images}
      renderItem={ArtPreviewListEntry}
      keyExtractor={image => image.uri}
      numColumns={2}
      horizontal={false}
      columnWrapperStyle={styles.listColumnWrapper}
      ItemSeparatorComponent={ArtPreviewListSeparator}
    />
  );
};

const ArtPreviewListEntry: ListRenderItem<ImageData> = function ({
  item: {title, artist, price, uri},
}) {
  return (
    <ArtPreview
      title={title}
      artist={artist}
      price={price}
      uri={uri}
      style={styles.listEntry}
    />
  );
};

const ArtPreviewListSeparator: React.FC = function () {
  return <View style={styles.listSeparator} />;
};

const styles = StyleSheet.create({
  listEntry: {
    flex: 0.5,
  },
  listSeparator: {
    height: rem,
  },
  listColumnWrapper: {
    paddingLeft: 0.1 * rem,
    paddingRight: 0.1 * rem,
    columnGap: rem,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
