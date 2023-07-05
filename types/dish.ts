type Herb = {
  name: string;
  description: string;
};

type Cheese = {
  name: string;
  description: string;
};
type Spice = {
  name: string;
  description: string;
};
type Beverage = {
  name: string;
  description: string;
};

type FoodDrink = {
  name: string;
  description: string;
};

type CustomerReview = {
  name: string;
  date:string;
  rating: number;
  review: string;
};

type SalesAndOffer = {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
};

type Ingredients = {
  herbs: Herb[];
  spices: Spice[]; 
  cheese: Cheese[];
};

type Supplements = {
  beverages: Beverage[];
  foodDrinks: FoodDrink[];
};

type Reviews = {
  dishName: string;
  averageRating: number;
  totalReviews: number;
  customerReviews: CustomerReview[];
};

type Options = {
  toppings: string[]; 
  sauce: string[];
  spiceLevel: string[];
};


type Dish = {
  id: string;
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
  show: boolean;
  fatContent: number;
  protein: number;
  salesAndOffers: SalesAndOffer[];

};


export default Dish