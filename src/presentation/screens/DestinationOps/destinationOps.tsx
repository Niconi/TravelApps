import { ScrollView, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './destinationOpsStyle';
import DestinationPicture from '../../ui-kit/Container/DestinationContainer/DestinationPicture';

const Location = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <DestinationPicture
        source={require('../../assets/images/home/Semeru.png')}
        name="Semeru Mountain"
        location="Malang, East Java"
        moreImage={require('../../assets/images/home/more.png')}
        moreText="+5"
        onPressBack={() => navigation.goBack()}
        onPressLike={() => {}}
        onPressMore={() => {}}
      />
      <View></View>
    </ScrollView>
  );
};

export default Location;
