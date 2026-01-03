import { Text, TouchableOpacity, StyleSheet} from 'react-native';

type ButtonProps = {
  label?: string;
  onPress: () => void;
  absolute?: boolean;
};

const Button = ({ label, onPress, absolute = false }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, absolute && styles.absolutePosition]}
      onPress={onPress}
    >
      <Text style={styles.ButtonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 350,
    height: 60,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 12,
    borderRadius: 30,
    marginTop: 20,
  },
  absolutePosition: {
    position: 'absolute',
    bottom: 80,
  },
  ButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  TouchableText: {
    fontSize: 12,
    fontWeight: 'regular',
    marginBottom: 14,
  },
});

export default Button;
