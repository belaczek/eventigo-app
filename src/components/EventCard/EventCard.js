/* @flow */

import React from 'react';
import { Image, StyleSheet, TouchableHighlight } from 'react-native';
import EventHeader from '../EventHeader';
import type { Event } from '../../types';

type Props = {
  event: Event,
  onPress?: (Event) => any
};

const EventCard = ({ event, onPress }: Props) => {
  const handlePress = () => {
    if (onPress) {
      onPress(event);
    }
  };

  return (
    <TouchableHighlight onPress={handlePress}>
      <Image source={{ uri: event.image }} style={styles.image}>
        <EventHeader event={event} />
      </Image>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 150,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  }
});

export default EventCard;