import React from 'react';
import {Block} from '../../common';
import CTimer from '../../common/CTimer';

const SessionTracker = ({start, stop}) => {
  return (
    <Block middle center flex={false} mb={20}>
      <CTimer start={start} stop={stop} />
    </Block>
  );
};

export default SessionTracker;
