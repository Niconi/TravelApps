import { Dimensions, StyleSheet } from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  //Container
  container: {
    flex: 1,
    backgroundColor: '#1A8EEA',
  },
  mainContainer: {
    width: width,
    height: height,
    marginTop: 66.77,
    borderRadius: 40,
    backgroundColor: '#FFFFFF',
  },
  ButtonContainer: {
    width: 350,
    height: 60,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 12,
    borderRadius: 30,
    marginTop: 50,
    marginBottom: 93,
  },
  //Text
  HeaderText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 47,
    marginBottom: 44,
    marginHorizontal: 56,
    textAlign: 'center',
  },
  Text: {
    fontSize: 14,
    fontWeight: 'semibold',
    textAlign: 'center',
    lineHeight: 24,
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
