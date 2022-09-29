import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'tomato',
    padding: 16,
    borderRadius: 15,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

function Button({ children, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity {...rest} style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

export default Button;
