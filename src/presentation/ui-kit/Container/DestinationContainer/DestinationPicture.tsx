import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
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
          <TouchableOpacity
            onPress={onPressBack}
            style={styles.back}
          ></TouchableOpacity>
          <TouchableOpacity
            onPress={onPressLike}
            style={styles.like}
          ></TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.location}>{location}</Text>
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
    width: '100%',
    height: 475,
    alignSelf: 'center',
    overflow: 'hidden',
    borderRadius: 20,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 53,
    marginHorizontal: 21,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 275,
  },
  textContainer: {},
  name: {
    fontSize: 24,
    fontWeight: 'semibold',
    color: 'white',
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
    borderRadius: 0,
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
