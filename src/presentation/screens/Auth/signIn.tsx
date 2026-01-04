import { View, Image, Text, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './signInStyle';
import InputField from '../../ui-kit/TextInput/TextInput';
import Button from '../../ui-kit/Button/Button';
import TouchableText from '../../ui-kit/Button/ButtonText';
import ButtonIcon from '../../ui-kit/Button/ButtonIcon/ButtonIcon';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useRef, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';

function SignIn() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['75%'], []);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        enableAutomaticScroll={true}
        bounces={false}
        overScrollMode="never"
      >
        <Image
          source={require('../../assets/images/auth/SignIn.png')}
          style={styles.image}
        />
        <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints}>
          <BottomSheetView>
            <View style={styles.mainContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.title}>Sign In</Text>
                <Text style={styles.text}>Please enter your account</Text>
              </View>
              <InputField label="Email" placeholder="Email" size={370} />
              <InputField label="Password" placeholder="Password" size={370} />
              <TouchableText
                label="Forgot Password"
                onPress={() => navigation.navigate('ForgetPassword')}
                align="flex-end"
              />
              <Button
                label="Sign In"
                onPress={() => navigation.navigate('HomeStack')}
              />
              <View style={styles.lineContainer}>
                <View style={styles.line} />
                <Text style={styles.text}>Or</Text>
                <View style={styles.line} />
              </View>
              <View style={styles.iconContainer}>
                <ButtonIcon
                  onPress={() => {}}
                  source={require('../../assets/icons/Google.png')}
                  size={24}
                  border={true}
                  width={60}
                  height={40}
                />
                <ButtonIcon
                  onPress={() => {}}
                  source={require('../../assets/icons/Twitter.png')}
                  size={24}
                  border={true}
                  width={60}
                  height={40}
                />
              </View>
              <TouchableText
                label="Don't have an account? Sign Up"
                onPress={() => {
                  navigation.navigate('SignUp');
                }}
                align="center"
              />
            </View>
          </BottomSheetView>
        </BottomSheet>
      </KeyboardAwareScrollView>
    </View>
  );
}

export default SignIn;
