import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { useRef, useState } from 'react';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './onboardingStyle';
import onboardingText from '../../../data/onboardingText';
import Button from '../../ui-kit/Button/Button';

function Onboarding() {
  const navigation = useNavigation();
  const { width } = Dimensions.get('window');
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex);
  const updateCurrentIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const index = Math.round(
      contentOffsetX / e.nativeEvent.layoutMeasurement.width,
    );
    setCurrentIndex(index);
  };
  const goToNextSlide = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < onboardingText.length) {
      const offset = nextIndex * width;
      ref?.current?.scrollToOffset({ offset });
    } else {
      goToAuth();
    }
  };
  const goToAuth = () => {
    navigation.navigate('SignIn');
  };
  const ref = useRef<FlatList>(null);
  return (
    <View style={styles.container}>
      <Image source={onboardingText[currentIndex].Image} style={styles.Image} />
      <View style={styles.mainContainer}>
        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentIndex}
          data={onboardingText}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.textContainer}>
              <Text style={styles.HeaderText}>{item.HeaderText}</Text>
              <Text style={styles.Text}>{item.Text}</Text>
            </View>
          )}
        />
      </View>
      <Button label={onboardingText[currentIndex].ButtonText} onPress={goToNextSlide} absolute={true} />
      <View style={styles.indicatorContainer}>
        {onboardingText.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentIndex === index && styles.activeIndicator,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

export default Onboarding;
