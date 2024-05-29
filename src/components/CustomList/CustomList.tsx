import { FlatList } from "react-native"
import { Employee } from "../../screens/Employee/types";
interface FlatListProps {
  renderItem: ({item, index}: {item: Employee, index: number}) => React.ReactElement,
}
interface CustomListProps extends FlatListProps {
  data: Employee[],
}
const CustomList:React.FC<CustomListProps> = (props) => {
  const {data, renderItem} = props;
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(_, index: number) => String(index)}
      extraData={data}
    />
  )
}
export default CustomList;