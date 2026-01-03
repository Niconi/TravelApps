import { View, Image, Text, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './signUpStyle';
import InputField from '../../ui-kit/TextInput/TextInput';
import Button from '../../ui-kit/Button/Button';
import TouchableText from '../../ui-kit/Button/ButtonText';
import ButtonIcon from '../../ui-kit/Button/ButtonIcon/ButtonIcon';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useRef, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';   

function SignUp() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['80%'], []);
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
          source={require('../../assets/images/auth/SignUp.png')}
          style={styles.image}
        />
        <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints}>
          <BottomSheetView>
            <View style={styles.mainContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.title}>Sign Up</Text>
                <Text style={styles.text}>Create an account, it's free</Text>
              </View>
              <InputField label="Name" placeholder="Name" size={370}/>
              <InputField label="Email" placeholder="Email" size={370}/>
              <InputField label="Password" placeholder="Password" size={370}/>
              <Button label="Sign Up" onPress={() => {}} />
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
                />
                <ButtonIcon
                  onPress={() => {}}
                  source={require('../../assets/icons/Twitter.png')}
                  size={24}
                />
              </View>
              <TouchableText
                label="Have an account? Sign In"
                onPress={() => navigation.navigate('SignIn')}
                align="center"
              />
            </View>
          </BottomSheetView>
        </BottomSheet>
      </KeyboardAwareScrollView>
    </View>
  );
}

export default SignUp;
