import { Text, View } from "react-native";
import H2 from "../styling Components/H2";
import H4 from "../styling Components/H4";
import Paragraph from "../styling Components/Paragraph";

type SalesAndOffer = {
  salesAndOffers: {
    title: string;
    description: string;
    startDate: string;
    endDate: string;
  }[];
};
const SalesAndOffers: React.FC<SalesAndOffer> = (props: SalesAndOffer) => {
  const dishData = {
    salesAndOffers: [
      {
        title: "Happy Hour Special",
        description:
          "Enjoy discounted prices on select drinks and appetizers during our daily happy hour.",
        startDate: "2023-06-15",
        endDate: "2023-06-30",
      },
      {
        title: "Weekend Brunch Deal",
        description:
          "Join us for our weekend brunch and get 20% off your total bill from 9 AM to 12 PM.",
        startDate: "2023-07-01",
        endDate: "2023-07-31",
      },
      {
        title: "Loyalty Program",
        description:
          "Sign up for our loyalty program and earn points for every purchase. Redeem points for exclusive discounts and rewards.",
        startDate: "2023-06-01",
        endDate: "2023-12-31",
      },
      {
        title: "Family Special",
        description:
          "Bring your family and enjoy a special 3-course meal package at a discounted price every Sunday.",
        startDate: "2023-06-20",
        endDate: "2023-09-30",
      },
    ],
  };

  const getCurrentWeekNumber = (): number => {
    const now: Date = new Date();
    const startOfYear: Date = new Date(now.getFullYear(), 0, 0);
    const diff: number = now.getTime() - startOfYear.getTime();
    const oneWeekInMilliseconds: number = 1000 * 60 * 60 * 24 * 7;
    return Math.floor(diff / oneWeekInMilliseconds);
  };
  const currentWeekNumber = getCurrentWeekNumber();
  const randomOffer =
    props.salesAndOffers[currentWeekNumber % dishData.salesAndOffers.length];

  return (
    <>
      <View
        style={{
          backgroundColor: "#242424",
          borderStyle: "dotted",
          borderColor: "#aaa",
          borderWidth: 1,
          padding: 15,
        }}
      >
        <H2 heading="Discount And Offers" />
        <H4 heading={randomOffer.title} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              color: "#fff",
              fontSize: 12,
              fontFamily: "secondary",
            }}
          >
            {randomOffer.startDate}
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 12,
              fontFamily: "secondary",
            }}
          >
            {randomOffer.endDate}
          </Text>
        </View>
        <Paragraph para={randomOffer.description} />
      </View>
    </>
  );
};

export default SalesAndOffers;
