import { ScrollView, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import styles from './destinationOpsStyle';
import DestinationPicture from '../../ui-kit/Container/DestinationContainer/DestinationPicture';
import Barrier from '../../ui-kit/extra/barrier';
import SpecContainer from '../../ui-kit/Container/DestinationContainer/SpecContainer';
import Options from '../../ui-kit/Container/DestinationContainer/Options';
import CircleButton from '../../ui-kit/Button/CircleButton';
import Facilities from '../../ui-kit/Container/DestinationContainer/Facilities';
import SectionTitle from '../../ui-kit/Container/DestinationContainer/SectionTitle';

const Location = () => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedMeetingPoint, setSelectedMeetingPoint] = useState<
    string | null
  >(null);
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        bounces={false}
      >
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
          <SectionTitle title="Description" />
          <Text style={styles.descriptionText}>
            Mount Semeru or Mount Meru is a cone volcano in East Java,
            Indonesia. Mount Semeru is the highest mountain on the island of
            Java, with its peak Mahameru, 3,676 meters above sea level.
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <SectionTitle
            title="Choose date"
            icon={require('../../assets/images/home/info.png')}
          />
          <View style={styles.optionsContainer}>
            <Options
              title="15 Dec - 20 Dec 2023"
              active={selectedDate === '15 Dec - 20 Dec 2023'}
              onPress={() =>
                setSelectedDate(
                  selectedDate === '15 Dec - 20 Dec 2023'
                    ? null
                    : '15 Dec - 20 Dec 2023',
                )
              }
            />
            <Options
              title="25 Dec - 30 Dec 2023"
              active={selectedDate === '25 Dec - 30 Dec 2023'}
              onPress={() =>
                setSelectedDate(
                  selectedDate === '25 Dec - 30 Dec 2023'
                    ? null
                    : '25 Dec - 30 Dec 2023',
                )
              }
            />
            <Options
              title="Choose date"
              icon={require('../../assets/images/home/info.png')}
              active={selectedDate === 'Choose date'}
              onPress={() =>
                setSelectedDate(
                  selectedDate === 'Choose date' ? null : 'Choose date',
                )
              }
            />
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <SectionTitle
            title="Choose Meeting Point"
            icon={require('../../assets/images/home/info.png')}
          />
          <View style={styles.optionsContainer}>
            <Options
              title="Serang"
              active={selectedMeetingPoint === 'Serang'}
              onPress={() =>
                setSelectedMeetingPoint(
                  selectedMeetingPoint === 'Serang' ? null : 'Serang',
                )
              }
            />
            <Options
              title="Balaraja"
              active={selectedMeetingPoint === 'Balaraja'}
              onPress={() =>
                setSelectedMeetingPoint(
                  selectedMeetingPoint === 'Balaraja' ? null : 'Balaraja',
                )
              }
            />
            <Options
              title="Tanggerang"
              active={selectedMeetingPoint === 'Tanggerang'}
              onPress={() =>
                setSelectedMeetingPoint(
                  selectedMeetingPoint === 'Tanggerang' ? null : 'Tanggerang',
                )
              }
            />
            <Options
              title="Jakarta"
              active={selectedMeetingPoint === 'Jakarta'}
              onPress={() =>
                setSelectedMeetingPoint(
                  selectedMeetingPoint === 'Jakarta' ? null : 'Jakarta',
                )
              }
            />
            <Options
              title="Bekasi"
              active={selectedMeetingPoint === 'Bekasi'}
              onPress={() =>
                setSelectedMeetingPoint(
                  selectedMeetingPoint === 'Bekasi' ? null : 'Bekasi',
                )
              }
            />
            <Options
              title="Cikampek"
              active={selectedMeetingPoint === 'Cikampek'}
              onPress={() =>
                setSelectedMeetingPoint(
                  selectedMeetingPoint === 'Cikampek' ? null : 'Cikampek',
                )
              }
            />
          </View>
        </View>
        <View style={styles.orderContainer}>
          <View>
            <Text style={styles.orderText}>Number of pax</Text>
            <Text style={styles.orderText}>Rp 1.400.000</Text>
          </View>
          <View style={styles.orderButtonContainer}>
            <CircleButton title="-" onPress={() => {}} />
            <Text>1</Text>
            <CircleButton title="+" onPress={() => {}} />
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <SectionTitle
            title="Facilities"
            icon={require('../../assets/images/home/info.png')}
          />
          <View style={styles.optionsContainer}>
            <Facilities title="Transport" onPress={() => {}} />
            <Facilities title="Simaksi" onPress={() => {}} />
            <Facilities title="Coffe Break" onPress={() => {}} />
            <Facilities title="Medis during trip" onPress={() => {}} />
            <Facilities title="Camping Tent" onPress={() => {}} />
            <Facilities title="First Aid" onPress={() => {}} />
            <Facilities
              title="Officially recognized mountain guide"
              onPress={() => {}}
            />
            <Facilities title="Guide during trip" onPress={() => {}} />
          </View>
        </View>
      </ScrollView>
      <View style={styles.stickyBottom}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Total Price</Text>
          <Text style={styles.priceText}>Rp 1.400.000</Text>
        </View>
      </View>
    </View>
  );
};

export default Location;
