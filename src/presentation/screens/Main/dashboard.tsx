import { View, Text, ScrollView } from 'react-native';
import styles from './dasboardStyle';
import ButtonIcon from '../../ui-kit/Button/ButtonIcon/ButtonIcon';
import TextInput from '../../ui-kit/TextInput/TextInput';
import TouchableText from '../../ui-kit/Button/ButtonText';
import CustomImageBackground from '../../ui-kit/Image/ImageBackground';

function Dashboard() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headerText}>Your Location</Text>
          <Text style={styles.locationText}>Tangerang Kab.</Text>
        </View>
        <View style={styles.headerIconContainer}>
          <ButtonIcon
            onPress={() => {}}
            source={require('../../assets/icons/discount.png')}
            size={30}
            width={40}
            height={40}
          />
          <ButtonIcon
            onPress={() => {}}
            source={require('../../assets/icons/setting.png')}
            size={30}
            width={40}
            height={40}
          />
        </View>
      </View>
      <TextInput placeholder="Search" size={350} />
      <View>
        <View style={styles.popularTextContainer}>
          <Text style={styles.titleText}>Popular Nearby</Text>
          <TouchableText label="See All" onPress={() => {}} align="flex-end" />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.popularContainer}>
            <CustomImageBackground
              source={require('../../assets/images/home/Semeru.png')}
              width={232}
              height={195}
            />
            <Text style={styles.destinationName}>Semeru Mountain</Text>
            <Text style={styles.destinationLocation}>Malang, East Java</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default Dashboard;
