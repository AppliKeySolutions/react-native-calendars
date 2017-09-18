import { StyleSheet, Platform } from 'react-native';
import * as defaultStyle from '../../../style';

const FILLER_HEIGHT = 34;

export default function styleConstructor(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    wrapper: {
      flex: 1,
      alignItems: 'center',
      alignSelf: 'stretch',
      marginLeft: -1
    },
    base: {
      //borderWidth: 1,
      width: 38,
      height: FILLER_HEIGHT,
      alignItems: 'center'
    },
    fillers: {
      position: 'absolute',
      height: FILLER_HEIGHT,
      flexDirection: 'row',
      left: 0,
      right: 0,
      borderRadius: 17,
      overflow: 'hidden',
      marginLeft: 4,
      marginRight: 4,
    },
    leftFiller: {
      height: FILLER_HEIGHT,
      flex: 1,
      ...Platform.select({
        android: {
          borderTopLeftRadius: 17,
          borderBottomLeftRadius: 17,
        },
      }),
    },
    rightFiller: {
      height: FILLER_HEIGHT,
      flex: 1,
      ...Platform.select({
        android: {
          borderTopRightRadius: 17,
          borderBottomRightRadius: 17,
        },
      }),
    },
    text: {
      marginTop: 7,
      fontSize: 16,
      fontWeight: '300',
      color: appStyle.dayTextColor || '#2d4150',
      backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    todayText: {
      fontWeight: '500',
      color: theme.todayTextColor || appStyle.dayTextColor,
      //color: appStyle.textLinkColor
    },
    disabledText: {
      color: appStyle.textDisabledColor
    },
    quickAction: {
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#c1e4fe'
    },
    quickActionText: {
      marginTop: 6,
      color: appStyle.textColor
    },
    firstQuickAction: {
      backgroundColor: appStyle.textLinkColor
    },
    firstQuickActionText: {
      color: 'white'
    },
    naText: {
      color: '#b6c1cd'
    }
  });
}

