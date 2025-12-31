import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  //Container
  container: {
    flex: 1,
    backgroundColor: '#1A8EEA',
  },
  mainContainer: {
    width: width,
    height: height,
    marginTop: 50,
    marginBottom: 75,
    borderRadius: 40,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  textContainer: {
    width: width,
    height: 250,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 100,
    width: 350,
    height: 60,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 12,
    borderRadius: 30,
  },
  indicator: {
    width: 12,
    height: 12,
    marginHorizontal: 12,
    backgroundColor: 'grey',
    borderRadius: 12,
    justifyContent: 'space-between',
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  activeIndicator: {
    width: 12,
    height: 12,
    backgroundColor: 'blue',
    borderRadius: 12,
  },
  //Text
  HeaderText: {
    fontSize: 32,
    fontWeight: 'bold',
    height: 125,
    marginHorizontal: 56,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  Text: {
    fontSize: 14,
    fontWeight: 'semibold',
    textAlign: 'center',
    lineHeight: 20,
    marginHorizontal: 56,
  },
  //Images
  Image: {
    width: 200,
    height: 300,
    alignSelf: 'center',
    marginTop: 50,
  },
  //Button
  ButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default styles;
