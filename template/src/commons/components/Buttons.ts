import { StyleSheet } from 'react-native';

import { Colors, FontSize } from '../themes';

export default function () {
  const base: any = {
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    backgroundColor: Colors.defaultPrimaryColor,
    borderRadius: 40,
  };

  return StyleSheet.create({
    base,
    title: {
      fontSize: FontSize.h3,
      color: Colors.white,
      fontWeight: '600',
    },

    disabled: {
      ...base,
      opacity: 0.32,
    },
  });
}
