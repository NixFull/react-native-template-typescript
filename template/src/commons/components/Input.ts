import { StyleSheet } from 'react-native';

import { Colors, FontSize, Metrics } from '../themes';

export default function () {
  const base: any = {
    justifyContent: 'center',
    height: Metrics.inputHeight,
    borderRadius: 40,
    paddingHorizontal: Metrics.m16,
    borderWidth: 1,
    borderColor: Colors.black,
  };

  const phoneNumberInputBase: any = {
    flexDirection: 'row',
    alignItems: 'center',
    height: Metrics.inputHeight,
    borderRadius: 40,
    paddingHorizontal: 2,
    borderWidth: 1,
    borderColor: Colors.black,
  };

  return StyleSheet.create({
    base,
    input: {
      fontSize: FontSize.h2,
    },
    countryCodeContainer: {
      backgroundColor: Colors.orangeLight,
      borderRadius: 40,
      minWidth: '20%',
      height: 44,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: Metrics.m16,
    },
    phoneNumberInputBase,
    countryCode: {
      fontSize: FontSize.h2,
    },
    inputContainer: {
      flexGrow: 1,
    },
  });
}
