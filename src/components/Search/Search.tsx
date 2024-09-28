import React, { useRef, useState } from 'react';
import { Animated, Easing, TextInput, View } from 'react-native';
import { searchAtom } from '../../atoms/search.ts';
import { useAtom } from 'jotai';
import { styles } from './SearchStyle.ts';
import { Search as SearchIcon } from '../../styles/icons/Search.tsx';
import { StyleSheet } from 'react-native-windows';

const Search = () => {
  const [search, setSearch] = useAtom(searchAtom);
  const { view, input, icon } = styles;

  const [active, setActive] = useState(false);

  const widthAnim = useRef(new Animated.Value(200)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;

  const expandInput = () => {
    setActive(!active);
    Animated.timing(widthAnim, {
      toValue: 300,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.bezier(0.18, 0.5, 0.51, 0.92),
    }).start();
  };

  const shrinkInput = () => {
    setActive(!active);
    Animated.timing(widthAnim, {
      toValue: 200,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.bezier(0.18, 0.5, 0.51, 0.92),
    }).start();
  };

  const onChange = (text: string) => {
    setSearch(text);
    textOpacity.setValue(text.length);
  };

  const iconOpacity = textOpacity.interpolate({
    inputRange: [0, 30],
    outputRange: [1, 0],
  });

  const combineIconView = StyleSheet.flatten([icon, { width: 40, opacity: iconOpacity }]);
  const combineMainView = StyleSheet.flatten([view, { width: widthAnim }]);

  return (
    <Animated.View style={combineMainView}>
      <TextInput
        style={input}
        onChangeText={onChange}
        value={search}
        placeholder='Поиск'
        onFocus={expandInput}
        onBlur={shrinkInput}
        maxLength={50}
      />
      <Animated.View style={combineIconView}>
        <SearchIcon size={25} active={active} />
      </Animated.View>
    </Animated.View>
  );
};

export default Search;
