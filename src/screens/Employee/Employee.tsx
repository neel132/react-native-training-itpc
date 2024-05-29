import { useEffect, useState } from "react"
import CustomList from "../../components/CustomList/CustomList"
import { Text, View } from "react-native";
import { getEmployees } from "../../services/employees/employee-service";
import { Employee as EmployeeType, FONT_WEIGHT } from "./types";

const Employee = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getEmployeeData();
  }, []);
  const getEmployeeData = async() => {
    const response = await getEmployees();
    console.log("Response -", response);
    if(response && response.length > 0) {
      setData(response);
    }
  }
  const renderItem = ({item}: {item: EmployeeType}) => {
    return (
      <View style={{flex: 1, padding: 16, margin: 16, backgroundColor: 'white'}}>
        <Text style={{fontSize: 18, fontWeight: FONT_WEIGHT.BOLD, textAlign: 'center'}}>
          {item.employee_name}
        </Text>
        <View style={{paddingVertical: 8}} />
        <View style={{flex: 1, justifyContent: 'space-around', flexDirection: 'row'}}>
          <Text>₹{item.employee_salary}</Text>
          <Text>Age: {item.employee_age}</Text>
        </View>
      </View>
    )
  }
  return (
    <CustomList data={data} renderItem={renderItem} />
  )
}
export default Employee;