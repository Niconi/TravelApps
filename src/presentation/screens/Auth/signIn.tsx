import { View, Image, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import styles from './signInStyle';
import InputField from '../../ui-kit/TextInput/TextInput';
import Button from '../../ui-kit/Button/Button';

function SignIn() {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior='padding'
        style={{flex: 1}}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 25}
      >
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
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
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

export default SignIn;
