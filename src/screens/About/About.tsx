import { Text } from "react-native"
import { useSelector } from "react-redux";

const About = () => {
  const {counter} = useSelector(state => state.counter);
  return (
     <Text> About Current Counter -{counter} </Text>
  )
}
export default About;