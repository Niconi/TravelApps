import { ScrollView, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './destinationOpsStyle';
import DestinationPicture from '../../ui-kit/Container/DestinationContainer/DestinationPicture';
import Barrier from '../../ui-kit/extra/barrier';
import SpecContainer from '../../ui-kit/Container/DestinationContainer/SpecContainer';
import Options from '../../ui-kit/Container/DestinationContainer/Options';

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
      <View style={styles.specContainer}>
        <SpecContainer title="Rating" text="4.5" />
        <Barrier width={1} height={52} color="lightgrey" borderRadius={5} />
        <SpecContainer title="Type" text="Open Trip" />
        <Barrier width={1} height={52} color="lightgrey" borderRadius={5} />
        <SpecContainer title="Estimate" text="3D 2N" />
        <Barrier width={1} height={52} color="lightgrey" borderRadius={5} />
        <SpecContainer title="VIA" text="Ranupane" />
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.descriptionText}>
          Mount Semeru or Mount Meru is a cone volcano in East Java, Indonesia.
          Mount Semeru is the highest mountain on the island of Java, with its
          peak Mahameru, 3,676 meters above sea level.
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.descriptionTitle}>Choose date</Text>
        <View style={styles.optionsContainer}>
          <Options title="15 Dec - 20 Dec 2023" />
          <Options title="25 Dec - 30 Dec 2023" />
          <Options
            title="Choose date"
            icon={require('../../assets/images/home/info.png')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Location;
