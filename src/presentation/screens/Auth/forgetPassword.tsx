import { View, Image, Text, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './forgetPasswordStyle';
import InputField from '../../ui-kit/TextInput/TextInput';
import Button from '../../ui-kit/Button/Button';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useRef, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';

function ForgetPassword() {
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
          source={require('../../assets/images/auth/ForgetPassword.png')}
          style={styles.image}
        />
        <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints}>
          <BottomSheetView>
            <View style={styles.mainContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.title}>Forget Password</Text>
                <Text style={styles.text}>
                  Please enter your email for sending OTP
                </Text>
              </View>
              <InputField label="Email" placeholder="Email" size={370}/>
              <Button label="Send OTP" onPress={() => navigation.navigate('OTP')} />
            </View>
          </BottomSheetView>
        </BottomSheet>
      </KeyboardAwareScrollView>
    </View>
  );
}

export default ForgetPassword;
