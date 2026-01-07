import { View, Text, ScrollView } from 'react-native';
import styles from './homeStyle';
import ButtonIcon from '../../ui-kit/Button/ButtonIcon/ButtonIcon';
import TextInput from '../../ui-kit/TextInput/TextInput';
import TouchableText from '../../ui-kit/Button/ButtonText';
import PopularContainer from '../../ui-kit/Container/HomeContainer/PopularContainer';
import RecommendedContainer from '../../ui-kit/Container/HomeContainer/RecommendedContainer';
import PromoContainer from '../../ui-kit/Container/HomeContainer/PromoContainer';
import Location from '../../ui-kit/Container/HomeContainer/Location';
import Article from '../../ui-kit/Container/HomeContainer/Article';
import { useNavigation } from '@react-navigation/native';

function Home() {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      bounces={false}
    >
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
      <TextInput placeholder="Search" size={350} marginHorizontal={30} />
      <View>
        <View style={styles.popularTextContainer}>
          <Text style={styles.titleText}>Popular Nearby</Text>
          <TouchableText label="See All" onPress={() => {}} align="flex-end" />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
        >
          <PopularContainer
            name="Semeru Mountain"
            location="Malang, East Java"
            image={require('../../assets/images/home/Semeru.png')}
            type="Hiking"
            onPress={() => navigation.navigate('DestinationOpsStack')}
          />
          <PopularContainer
            name="Semeru Mountain"
            location="Malang, East Java"
            image={require('../../assets/images/home/Semeru.png')}
            type="Hiking"
            onPress={() => {}}
          />
          <PopularContainer
            name="Semeru Mountain"
            location="Malang, East Java"
            image={require('../../assets/images/home/Semeru.png')}
            type="Hiking"
            onPress={() => {}}
          />
          <PopularContainer
            name="Semeru Mountain"
            location="Malang, East Java"
            image={require('../../assets/images/home/Semeru.png')}
            type="Hiking"
            onPress={() => {}}
          />
          <PopularContainer
            name="Semeru Mountain"
            location="Malang, East Java"
            image={require('../../assets/images/home/Semeru.png')}
            type="Hiking"
            onPress={() => {}}
          />
        </ScrollView>
      </View>
      <View>
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>Recommended</Text>
          <TouchableText label="See All" onPress={() => {}} align="flex-end" />
        </View>
        <ScrollView bounces={false}>
          <RecommendedContainer
            name="Kerinci Mountain"
            type="Hiking"
            location="Solok, Jambi"
            image={require('../../assets/images/home/Kerinci.png')}
            onPress={() => {}}
          />
          <RecommendedContainer
            name="Kerinci Mountain"
            type="Hiking"
            location="Solok, Jambi"
            image={require('../../assets/images/home/Kerinci.png')}
            onPress={() => {}}
          />
          <RecommendedContainer
            name="Kerinci Mountain"
            type="Hiking"
            location="Solok, Jambi"
            image={require('../../assets/images/home/Kerinci.png')}
            onPress={() => {}}
          />
          <RecommendedContainer
            name="Kerinci Mountain"
            type="Hiking"
            location="Solok, Jambi"
            image={require('../../assets/images/home/Kerinci.png')}
            onPress={() => {}}
          />
        </ScrollView>
      </View>
      <View>
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>Promo Partner</Text>
          <TouchableText label="See All" onPress={() => {}} align="flex-end" />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
        >
          <PromoContainer
            source={require('../../assets/images/home/Promo.png')}
            onPress={() => {}}
          />
        </ScrollView>
      </View>
      <View>
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>Location</Text>
          <TouchableText label="See All" onPress={() => {}} align="flex-end" />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
        >
          <Location
            source={require('../../assets/images/home/CentralJava.png')}
            onPress={() => {}}
          />
          <Location
            source={require('../../assets/images/home/CentralJava.png')}
            onPress={() => {}}
          />
          <Location
            source={require('../../assets/images/home/CentralJava.png')}
            onPress={() => {}}
          />
        </ScrollView>
      </View>
      <View>
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>Article</Text>
          <TouchableText label="See All" onPress={() => {}} align="flex-end" />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
        >
          <Article
            source={require('../../assets/images/home/MerapiMountArticle.png')}
            name="Merapi Mountain erupt again"
            author="Adams"
            date="9 Dec 2023"
            onPress={() => {}}
          />
          <Article
            source={require('../../assets/images/home/MerapiMountArticle.png')}
            name="Merapi Mountain erupt again"
            author="Adams"
            date="9 Dec 2023"
            onPress={() => {}}
          />
          <Article
            source={require('../../assets/images/home/MerapiMountArticle.png')}
            name="Merapi Mountain erupt again"
            author="Adams"
            date="9 Dec 2023"
            onPress={() => {}}
          />
        </ScrollView>
      </View>
    </ScrollView>
  );
}

export default Home;
