import { useEffect, useState } from "react";
import { Text, View, Dimensions } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";

const Home = (props) => {
  const {navigation} = props;
  const height = Dimensions.get('window').height;
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("useffect called!");
    return () => {
      console.log("useffect cleanup called!");
    }
  }, [counter]);
  const navigate = () => {
    navigation.navigate('AboutUs');
  }
  console.log("home ui is been rendered!");
  return (
    <View style={{ flex: 1, justifyContent: "center"}}>
      <View style={{ height: height*.7, justifyContent: 'space-evenly',}}>
        <View>
          <Text style={{ fontSize: 36, fontWeight: 'bold', textAlign: 'center'}}>Counter - {counter}</Text>
          {
            counter % 2 === 0 && <Text style={{fontSize: 18, textAlign: 'center', textTransform: 'lowercase', }}>This is an even number</Text>
          }
        </View>
      <CustomButton label={"Increment By 1"} onPress={() => setCounter(counter + 1)} />
      </View>
      <CustomButton label={"About Us"} onPress={navigate} />
    </View>
  );
};

export default Home;
