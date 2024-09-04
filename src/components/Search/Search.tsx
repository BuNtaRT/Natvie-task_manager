import React from 'react';
import { TextInput, View } from 'react-native';
import { searchAtom } from '../../atoms/search.ts';
import { useAtom } from 'jotai';
import { styles } from './SearchStyle.ts';

const Search = () => {
  const [search, setSearch] = useAtom(searchAtom);
  const { view, input } = styles;

  return (
    <View style={view}>
      <TextInput style={input} onChangeText={setSearch} value={search} placeholder='Поиск' />
    </View>
  );
};

export default Search;
