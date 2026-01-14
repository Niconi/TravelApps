import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  //Container
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 120, // Add padding to prevent content from being hidden behind sticky bottom
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
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 5,
  },
  orderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginHorizontal: 30,
    gap: 70,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    padding: 20,
  },
  orderButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  stickyBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceContainer: {
    flex: 1,
  },
  //Text
  descriptionText: {
    fontSize: 10,
    fontWeight: 'light',
    color: 'black',
  },
  orderText: {
    fontSize: 16,
    fontWeight: 'medium',
    color: 'black',
  },
  priceLabel: {
    fontSize: 12,
    fontWeight: '400',
    color: 'lightgrey',
    marginBottom: 4,
  },
  priceText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
});

export default styles;
