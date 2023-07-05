export type Comment = {
   id:string;
   name:string;
   review:string;
   email:string;
   rating:number;
   date:string;
}

export type BlogData = {
  id:string;
  date: string;
  finalWords: string;
  image1: string;
  intro: string;
  mainTitle: string;
  name: string;
  pointsintro:{
  point1: string;
  point2: string;
  point3: string;
  }
  pointsoutro:{
  point1: string;
  point2: string;
  point3: string;
  }
  outroTitle: string;
  outropara: string;
  
  quote: string;
  subpara: string;
  subtitle1: string;
  video: string;
  videopara: string;
  writer: {
  date: string;
  restaurantName: string;
  Postedby:string;

  };
  comments : Comment[]
  
};