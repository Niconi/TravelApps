import { Text, TouchableOpacity, StyleSheet } from 'react-native';

type ButtonProps = {
  label?: string;
  onPress: () => void;
  align?: 'center' | 'flex-end' | 'flex-start';
};

const TouchableText = ({ label, onPress, align = 'center' }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, { alignSelf: align }]}
      onPress={onPress}
    >
      <Text style={styles.touchableText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'center',
    marginRight: 10,
  },
  touchableText: {
    fontSize: 12,
    fontWeight: 'regular',
  },
});

export default TouchableText;
