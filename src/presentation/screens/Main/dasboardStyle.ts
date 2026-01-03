import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  //Container
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 30,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  popularTextContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  popularContainer:{
    width: 242,
    height: 277,
    marginTop: 20,
    marginBottom: 30,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 20,
    padding: 4,
    alignContent: 'center',
  },
  //Text
  headerText: {
    fontSize: 12,
    fontWeight: 'regular',
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'medium',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'semibold',
  },
  destinationName: {
    fontSize: 14,
    fontWeight: 'medium',
    marginTop: 14,
    marginBottom: 5,
    marginHorizontal: 15,
  },
  destinationLocation:{
    fontSize: 10,
    fontWeight: 'light',
    marginBottom: 23,
    marginHorizontal: 15,
  },
});

export default styles;
