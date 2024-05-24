import { Text, TouchableOpacity } from "react-native";

const CustomButton = (props) => {
  const {label, onPress} = props;
  return (
    <TouchableOpacity
        onPress={onPress}
        style={{
          borderWidth: 1,
          padding: 10,
          margin: 10,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text>{label}</Text>
    </TouchableOpacity>
  )
}
export default CustomButton;