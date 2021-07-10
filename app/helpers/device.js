import {Dimensions, Platform} from 'react-native';

export const width = Dimensions.get('window').width;
export const widthScr = Dimensions.get('screen').width;
export const height = Dimensions.get('window').height;
export const heightScr = Dimensions.get('screen').height;

export const ios = Platform.OS === 'ios';
export const android = Platform.OS === 'android';
