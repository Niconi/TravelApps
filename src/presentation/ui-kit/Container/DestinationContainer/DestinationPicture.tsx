import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
type DestinationPictureProps = {
  source: any;
  name: string;
  location: string;
  moreImage: any;
  moreText: string;
  onPressBack: () => void;
  onPressLike: () => void;
  onPressMore: () => void;
};

function DestinationPicture({
  source,
  name,
  location,
  moreImage,
  moreText,
  onPressBack,
  onPressLike,
  onPressMore,
}: DestinationPictureProps) {
  return (
    <View>
      <ImageBackground source={source} style={styles.imageBackground}>
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={onPressBack} style={styles.back}>
            <Image
              source={require('../../../assets/images/home/Back.png')}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressLike} style={styles.like}>
            <Image
              source={require('../../../assets/images/home/wishlist.png')}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.locationContainer}>
              <Image
                source={require('../../../assets/images/home/location.png')}
                style={styles.locationIcon}
              />
              <Text style={styles.location}>{location}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={onPressMore}>
            <ImageBackground source={moreImage} style={styles.moreImage}>
              <Text style={styles.moreText}>{moreText}</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    width: 380,
    height: 475,
    alignSelf: 'center',
    overflow: 'hidden',
    borderRadius: 20,
    marginTop: 15,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 21,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 300,
  },
  textContainer: {},
  name: {
    fontSize: 24,
    fontWeight: 'semibold',
    color: 'white',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  locationIcon: {
    width: 12,
    height: 12,
  },
  location: {
    fontSize: 14,
    fontWeight: 'regular',
    color: 'white',
  },
  back: {
    width: 44,
    height: 44,
    borderRadius: 44,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  like: {
    width: 44,
    height: 44,
    borderRadius: 44,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  moreImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  moreText: {
    fontSize: 14,
    fontWeight: 'regular',
    color: 'white',
  },
});

export default DestinationPicture;
