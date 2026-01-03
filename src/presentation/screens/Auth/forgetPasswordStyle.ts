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
    height: 645,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 30,
  },
  textContainer:{
    width: 370,
    alignItems: 'flex-start',
  },
  iconContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    gap: 20,
  },
  lineContainer:{
    flexDirection: 'row',
    marginTop: 40,
    gap: 5,
  },
  //Image
  image:{
    width: 308,
    height: 205,
    alignSelf: 'center',
    marginTop: 20,
  },
  line:{
    width: 150,
    height: 1,
    backgroundColor: 'grey',
    marginTop: 10,
  },
  //Text
  title:{
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text:{
    fontSize: 14,
    fontWeight: 'regular',
    marginBottom: 25,
  },
  lineText:{
    fontSize: 14,
    fontWeight: 'regular',
    marginBottom: 25,
  },
});

export default styles;
