import React from 'react';
import { FlatList } from 'react-native';
import NoteCardItem from './NoteCardItem';

const NoteCardList = ({ notes }) => {
  return (
    <FlatList
      data={notes}
      renderItem={({ item }) => <NoteCardItem item={item} />}
      keyExtractor={item => item.id}
    />
  );
};

export default NoteCardList;
