import { View, Image, Text, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './OTPStyle';
import InputField from '../../ui-kit/TextInput/TextInput';
import Button from '../../ui-kit/Button/Button';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useRef, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';

function OTP() {
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
          source={require('../../assets/images/auth/OTP.png')}
          style={styles.image}
        />
        <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints}>
          <BottomSheetView>
            <View style={styles.mainContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.title}>OTP Verification</Text>
                <Text style={styles.text}>
                  Please enter the OTP sent to your email
                </Text>
              </View>
              <InputField label="YourCode" placeholder="YourCode" size={370}/>
              <Button label="Verify" onPress={() => navigation.navigate('SignIn')} />
            </View>
          </BottomSheetView>
        </BottomSheet>
      </KeyboardAwareScrollView>
    </View>
  );
}

export default OTP;
