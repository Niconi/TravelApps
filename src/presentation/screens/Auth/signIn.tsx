import { View, Image, Text, KeyboardAvoidingView, Platform } from 'react-native';
import styles from './signInStyle';
import InputField from '../../ui-kit/TextInput/TextInput';
import Button from '../../ui-kit/Button/Button';

function SignIn() {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'padding' : 'height'} style={{flex: 1}}
        keyboardVerticalOffset={80}
      >
        <Image
          source={require('../../assets/images/auth/SignIn.png')}
          style={styles.image}
        />
        <View style={styles.mainContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Sign In</Text>
            <Text style={styles.text}>Please enter your account</Text>
          </View>
          <InputField label="Email" placeholder="Email" />
          <InputField label="Password" placeholder="Password" />
          <Button label="Sign In" onPress={() => {}} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

export default SignIn;
