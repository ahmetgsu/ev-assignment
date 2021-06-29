import React from 'react';
import {View} from 'react-native';
import {getRelatedSpace} from '../../helpers/getRelatedSpace';

const Block = ({
  flex,
  row,
  column,
  center,
  middle,
  left,
  right,
  top,
  bottom,
  card,
  color,
  space,
  style,
  children,
  pt,
  pr,
  pb,
  pl,
  ph,
  pv,
  mt,
  mr,
  mb,
  ml,
  mh,
  mv,
  ...props
}) => {
  const blockStyles = [
    styles.block,
    flex && {flex},
    flex === false && {flex: 0}, // reset / disable flex
    row && styles.row,
    column && styles.column,
    center && styles.center,
    middle && styles.middle,
    left && styles.left,
    right && styles.right,
    top && styles.top,
    bottom && styles.bottom,
    card && styles.card,
    space && {justifyContent: `space-${space}`},
    color && {backgroundColor: color}, // custom backgroundColor
    pt && getRelatedSpace('pt', pt),
    pr && getRelatedSpace('pr', pr),
    pb && getRelatedSpace('pb', pb),
    pl && getRelatedSpace('pl', pl),
    ph && getRelatedSpace('ph', ph),
    pv && getRelatedSpace('pv', pv),
    mt && getRelatedSpace('mt', mt),
    mr && getRelatedSpace('mr', mr),
    mb && getRelatedSpace('mb', mb),
    ml && getRelatedSpace('ml', ml),
    mh && getRelatedSpace('mh', mh),
    mv && getRelatedSpace('mv', mv),
    style, // rewrite predefined styles
  ];

  return (
    <View style={blockStyles} {...props}>
      {children}
    </View>
  );
};

export default Block;

const styles = {
  block: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  center: {
    alignItems: 'center',
  },
  middle: {
    justifyContent: 'center',
  },
  left: {
    justifyContent: 'flex-start',
  },
  right: {
    justifyContent: 'flex-end',
  },
  top: {
    justifyContent: 'flex-start',
  },
  bottom: {
    justifyContent: 'flex-end',
  },
};
