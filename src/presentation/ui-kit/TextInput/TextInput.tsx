import { Text, TextInput, View, StyleSheet } from 'react-native';

type InputFieldProp = {
  label: string;
  placeholder: string;
};

const InputField = ({ label, placeholder }: InputFieldProp) => {
  return (
    <View>
      <Text style={styles.labelText}>{label}</Text>
      <View style={styles.container}>
        <TextInput placeholder={placeholder} style={styles.inputText} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 370,
    height: 45,
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: 'grey',
    borderWidth: 1,
    marginTop: 6,
    marginBottom: 12,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  labelText: {
    fontSize: 16,
    color: 'black',
  },
  inputText: {
    fontSize: 14,
    color: 'black',
  },
});

export default InputField;
