import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

type ButtonProps = {
  label?: string;
  onPress: () => void;
};
const Button = ({ label, onPress }: ButtonProps) => {
  return (
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.ButtonText}>{label}</Text>
      </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    width: 350,
    height: 60,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 12,
    borderRadius: 30,
    marginTop: 20,
    bottom: 80,
  },
  ButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default Button;
