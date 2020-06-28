import _ from 'lodash';
import React, {memo, useCallback} from 'react';
import {
  ScrollView,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent
} from 'react-native';
import {
  Colors,
  Text,
  View,
  Image,
  withScrollReached,
  WithScrollReachedProps
} from 'react-native-ui-lib';

const FADE_OUT_HEIGHT = 100;
const fadeImage = require('../../../assets/images/FadeOut.png');
const WithScrollReached = (props: WithScrollReachedProps) => {
  const renderItem = useCallback((index: number) => {
    return (
      <View key={index} style={styles.item}>
        <Text>{index + 1}</Text>
      </View>
    );
  }, []);

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      _.invoke(props, 'onScroll', event);
      _.invoke(props, 'scrollReachedProps.onScroll', event);
    },
    [props.onScroll, props.scrollReachedProps.onScroll]
  );

  const renderFade = useCallback(() => {
    if (
      (_.isUndefined(props.scrollEnabled) || props.scrollEnabled) &&
      !props.scrollReachedProps.isScrollAtEnd
    ) {
      return (
        <Image
          style={styles.fadeOutImage}
          testID={`${props.testID}.fadeOut`}
          source={fadeImage}
        />
      );
    }
  }, [
    props.scrollEnabled,
    props.scrollReachedProps.isScrollAtEnd,
    props.testID
  ]);

  return (
    <View>
      <ScrollView
        {...props}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        {_.times(3, renderItem)}
      </ScrollView>
      {renderFade()}
    </View>
  );
};

export default memo(withScrollReached(WithScrollReached));

const styles = StyleSheet.create({
  scrollView: {
    height: 240
  },
  scrollViewContainer: {
    alignItems: 'center'
  },
  item: {
    width: 100,
    height: 100,
    margin: 9,
    backgroundColor: Colors.grey40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  fadeOutImage: {
    position: 'absolute',
    bottom: 0,
    height: FADE_OUT_HEIGHT,
    width: '100%'
  }
});