import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  //Container
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  specContainer: {
    marginTop: 26,
    marginHorizontal: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionContainer: {
    marginHorizontal: 30,
    marginTop: 30,
  },
  optionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
    marginTop: 10,
    gap: 5,
  },
  //Text
  descriptionTitle: {
    fontSize: 16,
    fontWeight: 'medium',
    color: 'black',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 10,
    fontWeight: 'light',
    color: 'black',
  },
});

export default styles;
