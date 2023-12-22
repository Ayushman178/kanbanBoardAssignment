import axios from "axios";

export const getData = async () => {
  try {
    const response = await axios.get(
      "https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers"
    );

    return response.data;
  } catch (error) {
    console.log("Error_During_Fetching_Data: ", error);
    throw new Error("Failed to fetch data");
  }
};
