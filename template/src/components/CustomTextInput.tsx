import React from 'react';
import { View, TextInput } from 'react-native';

import { Common } from '@/commons/styles';

interface Props {
  placeholder?: string;
  editable?: boolean;
  containerStyle?: {};
  value: any;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad';
  autoFocus?: boolean;
  onChangeText: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const CustomTextInput = (props: Props) => {
  const { placeholder, editable, onChangeText, value, onFocus, onBlur, keyboardType, autoFocus } = props;
  return (
    <View style={Common.input.base}>
      <TextInput
        style={Common.input.input}
        placeholder={placeholder}
        editable={editable}
        onChangeText={onChangeText}
        value={value}
        onFocus={onFocus}
        autoFocus={autoFocus}
        onBlur={onBlur}
        keyboardType={keyboardType}
        disableFullscreenUI
      />
    </View>
  );
};

CustomTextInput.defaultProps = {
  placeholder: '',
  editable: true,
  containerStyle: {},
  onFocus: () => {},
  onBlur: () => {},
  keyboardType: 'default',
  autoFocus: false,
};

export default CustomTextInput;
