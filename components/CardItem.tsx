import { View, Image } from "react-native";

const CardItem: React.FC = () => {
  return (
    <>
        <Image
          style={{ width: "100%", maxWidth: 500, height: 400 }}
          source={require("../assets/cusine/cusine.png")}
        />
    </>
  );
};

export default CardItem;
