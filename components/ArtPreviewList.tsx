import {ListRenderItem} from '@react-native/virtualized-lists';
import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {api, ImageData} from '../api/dummy';
import {rem} from '../shared/style';
import {ArtPreview} from './ArtPreview';

export const ArtPreviewList: React.FC = function () {
  const {isSuccess, isLoading, data} = useQuery(['images'], api.getImages, {});

  return (
    <FlatList
      data={isSuccess ? data : []}
      refreshing={isLoading}
      renderItem={ArtPreviewListEntry}
      keyExtractor={image => image.uri}
      numColumns={2}
      horizontal={false}
      columnWrapperStyle={styles.listColumnWrapper}
      ItemSeparatorComponent={ArtPreviewListSeparator}
      ListEmptyComponent={<Text>Loading...</Text>}
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
