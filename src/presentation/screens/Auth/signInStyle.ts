import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  //Container
  container: {
    flex: 1,
    backgroundColor: '#1A8EEA',
  },
  mainContainer: {
    width: width,
    minHeight: height - 200,
    marginTop: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
  textContainer:{
    width: 370,
    alignItems: 'flex-start',
  },
  //Image
  image:{
    width: 430,
    height: 443,
  },
  //Text
  title:{
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 14,
  },
  text:{
    fontSize: 14,
    fontWeight: 'regular',
    marginBottom: 40,
  }
});

export default styles;
