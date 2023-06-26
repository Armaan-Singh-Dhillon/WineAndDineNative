interface Herb {
  name: string;
  description: string;
}

interface Cheese {
  name: string;
  description: string;
}

interface Beverage {
  name: string;
  description: string;
}

interface FoodDrink {
  name: string;
  description: string;
}

interface CustomerReview {
  name: string;
  rating: number;
  review: string;
}

interface SalesAndOffer {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
}

interface Ingredients {
  herbs: Herb[];
  spices: any[]; // 
  cheese: Cheese[];
}

interface Supplements {
  beverages: Beverage[];
  foodDrinks: FoodDrink[];
}

interface Reviews {
  dishName: string;
  averageRating: number;
  totalReviews: number;
  customerReviews: CustomerReview[];
}

interface Options {
  toppings: string[]; 
  sauce: string[];
  spiceLevel: string[];
}

interface Dish {
  id:string;
  image: string;
  price: number;
  name: string;
  ingredients: Ingredients;
  description: string;
  averageTimeToCook: number;
  supplements: Supplements;
  reviews: Reviews;
  tags: string[];
  type: string;
  options: Options;
  deliveryTime: number;
  fatContent: number;
  protein: number;
  salesAndOffers: SalesAndOffer[];
}


export default Dish