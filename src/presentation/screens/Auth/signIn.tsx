import { View, Image, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './signInStyle';
import InputField from '../../ui-kit/TextInput/TextInput';
import Button from '../../ui-kit/Button/Button';

function SignIn() {
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        enableAutomaticScroll={true}
        extraScrollHeight={80}
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
          <View>
            <InputField label="Email" placeholder="Email" />
            <InputField label="Password" placeholder="Password" />
          </View>
          <View>
            <Button label="Sign In" onPress={() => {}} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

export default SignIn;
