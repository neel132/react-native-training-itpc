import axiosInstance from "../../config/axiosInstance";

const getEmployees = async() => {
  try {
    const response = await axiosInstance.get('employees');
    return response.data.data;
  } catch (err) {
    console.log(err);
  }
};
export {getEmployees};