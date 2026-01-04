import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  //Container
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 30,
  },
  headerIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  popularTextContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
  },
  titleTextContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 20,
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
  recommendedName: {
    fontSize: 14,
    fontWeight: 'medium',
    marginTop: 14,
    marginBottom: 5,
    marginHorizontal: 15,
  },
  recommendedLocation:{
    fontSize: 10,
    fontWeight: 'light',
    marginBottom: 23,
    marginHorizontal: 15,
  },
});

export default styles;
