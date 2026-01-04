import { Text, TextInput, View, StyleSheet } from 'react-native';
import SearchIcon from '../images/home/search.svg';

type InputFieldProp = {
  label?: string;
  placeholder: string;
  size: number;
  marginHorizontal?: number;
};

const InputField = ({
  label,
  placeholder,
  size,
  marginHorizontal,
}: InputFieldProp) => {
  return (
    <View>
      <Text style={styles.labelText}>{label}</Text>
      <View
        style={[
          styles.container,
          { width: size, marginHorizontal: marginHorizontal },
        ]}
      >
        <TextInput
          placeholder={placeholder}
          style={styles.inputText}
          placeholderTextColor="#9a9a9a"
        />
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
    flexDirection: 'row',
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
