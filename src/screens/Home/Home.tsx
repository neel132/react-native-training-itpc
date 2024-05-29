import { useEffect, useState } from "react";
import { Text, View, Dimensions } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import style from "./home.style";
import { useDispatch, useSelector } from "react-redux";
import { incrementFromUserInput } from "../../redux/slices/counterSlice";

const Home = (props) => {
  const {navigation} = props;
  const {counter} = useSelector(state => state.counter);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("useffect called!");
    return () => {
      console.log("useffect cleanup called!");
    }
  }, [counter]);
  const setCounter = (value) => {
    dispatch(incrementFromUserInput(Number(value)))
  }
  const navigate = () => {
    navigation.navigate('AboutUs');
  }
  console.log("home ui is been rendered!");
  return (
    <View style={style.container}>
      <View style={style.contentContainer}>
        <View>
          <Text style={style.counterText}>Counter - {counter}</Text>
          {
            counter % 2 === 0 && <Text style={style.evenNumberText}>This is an even number</Text>
          }
        </View>
      <CustomButton label={"Increment By 1"} onPress={() => setCounter(5)} />
      </View>
      <CustomButton label={"About Us"} onPress={navigate} />
    </View>
  );
};

export default Home;
