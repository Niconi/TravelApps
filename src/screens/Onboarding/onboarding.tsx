import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './onboardingStyle';
import onboardingText from '../../data/onboardingText';

function Onboarding() {
  return (
    <View>
      <FlatList
        data={onboardingText}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Image source={item.Image} style={styles.Image} />
            <View style={styles.mainContainer}>
              <Text style={styles.HeaderText}>{item.HeaderText}</Text>
              <Text style={styles.Text}>{item.Text}</Text>
            </View>
            <TouchableOpacity style={styles.ButtonContainer}>
              <Text style={styles.ButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

export default Onboarding;
