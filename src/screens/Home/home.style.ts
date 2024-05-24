import { Dimensions, StyleSheet } from "react-native";

const height = Dimensions.get('window').height;
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  contentContainer: {
    height: height*.7,
    justifyContent: 'space-evenly',
  },
  counterText: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  evenNumberText: {
    fontSize: 18,
    textAlign: 'center',
    textTransform: 'lowercase',
  }
});
export default style;