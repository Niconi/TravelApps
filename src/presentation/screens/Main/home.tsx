import { View, Text, ScrollView, FlatList } from 'react-native';
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
import { moderateScale } from 'react-native-size-matters';
import homeDestinationData from '../../../data/homeDestinationData';
import homeRecommendedData from '../../../data/homeRecommended';
import homeLocationData from '../../../data/homeLocation';
import homeArticleData from '../../../data/homeArticle';

const Component = () => <View style={{ padding: moderateScale(5) }} />;

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
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={styles.scrollView}
          ItemSeparatorComponent={<Component />}
          data={homeDestinationData}
          renderItem={({ item }) => (
            <View>
              <PopularContainer
                name={item.destinationName}
                location={item.destinationLocation}
                image={item.destinationImage}
                type={item.type}
                onPress={() => navigation.navigate('DestinationOpsStack')}
              />
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <View>
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>Recommended</Text>
          <TouchableText label="See All" onPress={() => {}} align="flex-end" />
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={{ paddingTop: 10 }}
          data={homeRecommendedData}
          renderItem={({ item }) => (
            <View>
              <RecommendedContainer
                name={item.name}
                type={item.type}
                location={item.location}
                image={item.image}
                onPress={() => navigation.navigate('DestinationOpsStack')}
              />
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
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
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={<Component />}
          bounces={false}
          contentContainerStyle={styles.scrollView}
          data={homeLocationData}
          renderItem={({ item }) => (
            <View>
              <Location source={item.image} onPress={() => {}} />
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <View>
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>Article</Text>
          <TouchableText label="See All" onPress={() => {}} align="flex-end" />
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={<Component />}
          bounces={false}
          contentContainerStyle={styles.scrollView}
          data={homeArticleData}
          renderItem={({ item }) => (
            <View>
              <Article
                source={item.image}
                name={item.title}
                author={item.author}
                date={item.date}
                onPress={() => {}}
              />
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </ScrollView>
  );
}

export default Home;
