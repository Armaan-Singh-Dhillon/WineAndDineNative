


const data=[
    {
        "image": "/path",
        "price": 2,
        "name": "Butter Chicken",
        "ingredients": {
            "herbs": [
                {
                    "name": "Khmeli Suneli",
                    "description": "This fragrant Georgian spice is mixed with fenugreek, marigold petals, coriander, black pepper, dill, mint, and bay leaf. It has warm, bitter, nutty, and grassy flavors.",
                    "uses": [
                        "Used in stews and meat dishes",
                        "Adds flavor to roasted vegetables and bean soups"
                    ]
                },
                {
                    "name": "Basil",
                    "description": "Basil is a versatile herb that goes well with baked fish, tomatoes, and tomato salads. It adds freshness and flavor to dishes."
                }
            ],
            "spices": [
                {
                    "name": "Pimentón de la Vera",
                    "description": "Pimentón de la Vera is a smoked paprika made by crushing dried peppers into a fragrant and smoky powder. It adds a unique flavor to various dishes."
                }
            ],
            "cheese": [
                {
                    "name": "Parmesan Reggiano",
                    "description": "Parmesan Reggiano is a hard, dry, fruity, and nutty-flavored cheese made from raw skimmed milk of cows. It is commonly used as a grating cheese."
                },
                {
                    "name": "Feta",
                    "description": "Feta is a brined cheese produced with unpasteurized or pasteurized milk. It has a tangy flavor and crumbly texture, often used in salads and Greek cuisine."
                }
            ]
        },
      
        "reviews": {
            "dishName": "Spicy Thai Basil Chicken",
            "averageRating": 4.5,
            "totalReviews": 27,
            "customerReviews": [
                {
                    "name": "John Smith",
                    "rating": 5,
                    "review": "Absolutely delicious! The perfect balance of flavors. The chicken was tender, and the spiciness was just right.",
                    "date": "2023-06-01"
                },
                {
                    "name": "Emily Johnson",
                    "rating": 4,
                    "review": "I enjoyed the dish, especially the aromatic basil. It had a good level of spiciness, and the chicken was cooked well.",
                    "date": "2023-05-28"
                },
                {
                    "name": "Michael Davis",
                    "rating": 4.5,
                    "review": "Great dish! The flavors were authentic, and the portion size was generous. Will definitely order again.",
                    "date": "2023-05-25"
                },
                {
                    "name": "Sarah Thompson",
                    "rating": 3.5,
                    "review": "The dish had good flavor, but it was slightly too spicy for my taste. The chicken could have been more tender.",
                    "date": "2023-05-20"
                },
                {
                    "name": "David Wilson",
                    "rating": 5,
                    "review": "This dish was outstanding! The flavors were bold and well-balanced. Definitely a must-try.",
                    "date": "2023-05-15"
                }
            ]
        },
       
        "options": {
            "toppings": [
                "Extra veggies",
                "Fried egg",
                "Crushed peanuts"
            ],
            "sauce": [
                "Sweet chili sauce",
                "Fish sauce",
                "Soy sauce"
            ],
            "spiceLevel": [
                "Mild",
                "Medium",
                "Spicy"
            ]
        },
        "salesAndOffers": [
            {
                "title": "Happy Hour Special",
                "description": "Enjoy discounted prices on select drinks and appetizers during our daily happy hour.",
                "startDate": "2023-06-15",
                "endDate": "2023-06-30"
            },
            {
                "title": "Weekend Brunch Deal",
                "description": "Join us for our weekend brunch and get 20% off your total bill from 9 AM to 12 PM.",
                "startDate": "2023-07-01",
                "endDate": "2023-07-31"
            },
            {
                "title": "Loyalty Program",
                "description": "Sign up for our loyalty program and earn points for every purchase. Redeem points for exclusive discounts and rewards.",
                "startDate": "2023-06-01",
                "endDate": "2023-12-31"
            },
            {
                "title": "Family Special",
                "description": "Bring your family and enjoy a special 3-course meal package at a discounted price every Sunday.",
                "startDate": "2023-06-20",
                "endDate": "2023-09-30"
            }
        ]
    },
    {
        "image": "/path2",
        "price": 8,
        "name": "Chicken Caesar Salad",
        "ingredients": {
            "herbs": [
                {
                    "name": "Romaine Lettuce",
                    "description": "Crisp and refreshing lettuce variety commonly used in salads, especially Caesar salads."
                }
            ],
            "spices": [],
            "cheese": [
                {
                    "name": "Parmesan Cheese",
                    "description": "A hard and salty cheese with a nutty flavor, often grated over salads for added richness."
                }
            ]
        },
        "description": "Enjoy a delicious Chicken Caesar Salad made with fresh romaine lettuce, grilled chicken strips, Parmesan cheese, and a tangy Caesar dressing. It's a satisfying and healthy salad option.",
        "averageTimeToCook": 10,
        "supplements": {
            "beverages": [
                {
                    "name": "Iced Lemon Tea",
                    "description": "A refreshing iced tea infused with zesty lemon flavor. Perfect to accompany your salad."
                },
                {
                    "name": "Mineral Water",
                    "description": "Pure and natural mineral water that provides hydration without any added flavors or sweeteners."
                }
            ],
            "foodDrinks": [
                {
                    "name": "Garlic Breadsticks",
                    "description": "Oven-baked breadsticks seasoned with garlic and served with a side of marinara sauce. A tasty addition to your salad meal."
                },
                {
                    "name": "Fruit Bowl",
                    "description": "A bowl of assorted fresh fruits, including seasonal favorites. A healthy and refreshing choice for a light snack."
                }
            ]
        },
        "reviews": {
            "dishName": "Chicken Caesar Salad",
            "averageRating": 4.7,
            "totalReviews": 42,
            "customerReviews": [
                {
                    "name": "Olivia Wilson",
                    "rating": 5,
                    "review": "The Chicken Caesar Salad was fresh and delicious. The dressing was perfectly balanced, and the chicken was tender and flavorful."
                },
                {
                    "name": "Ethan Thompson",
                    "rating": 4.5,
                    "review": "I loved the combination of flavors in this salad. The chicken was seasoned well, and the Parmesan cheese added a nice touch."
                }
            ]
        },
        "tags": [
            "salad",
            "chicken",
            "healthy",
            "light"
        ],
        "type": "appetizer",
        "options": {
            "toppings": [],
            "sauce": [
                "Caesar dressing"
            ],
            "spiceLevel": []
        },
        "deliveryTime": 20,
        "fatContent": 7,
        "protein": 22,
        "salesAndOffers": [
            {
                "title": "Salad Combo Deal",
                "description": "Pair your Chicken Caesar Salad with a choice of soup or a small smoothie at a discounted price.",
                "startDate": "2023-06-15",
                "endDate": "2023-06-30"
            },
            {
                "title": "Lunch Special",
                "description": "Get 10% off on any salad during lunch hours (12 PM - 3 PM). A perfect choice for a healthy midday meal.",
                "startDate": "2023-07-01",
                "endDate": "2023-07-31"
            },
            {
                "title": "Health & Wellness Program",
                "description": "Join our health and wellness program to receive exclusive offers and discounts on salads and healthy menu items.",
                "startDate": "2023-06-01",
                "endDate": "2023-12-31"
            }
        ]
    },
    {
        "image": "/path3",
        "price": 18,
        "name": "Grilled Salmon",
        "ingredients": {
            "herbs": [],
            "spices": [
                {
                    "name": "Lemon Pepper",
                    "description": "A zesty and tangy spice blend made with lemon zest, black pepper, and other complementary herbs. It adds a citrusy kick to grilled salmon."
                }
            ],
            "cheese": []
        },
        "description": "Savor the flavors of a perfectly grilled salmon fillet. The salmon is seasoned with a delightful lemon pepper blend, resulting in a juicy and flavorful dish.",
        "averageTimeToCook": 25,
        "supplements": {
            "beverages": [
                {
                    "name": "White Wine",
                    "description": "A crisp and refreshing white wine that pairs well with seafood dishes like grilled salmon."
                },
                {
                    "name": "Sparkling Lemonade",
                    "description": "A fizzy and tangy lemonade with a refreshing twist. It complements the flavors of the grilled salmon."
                }
            ],
            "foodDrinks": [
                {
                    "name": "Roasted Vegetables",
                    "description": "A medley of colorful vegetables, roasted to perfection. It adds a nutritious and flavorful side to your grilled salmon."
                },
                {
                    "name": "Quinoa Salad",
                    "description": "A protein-packed salad made with quinoa, mixed vegetables, and a zesty dressing. A wholesome accompaniment to your meal."
                }
            ]
        },
        "reviews": {
            "dishName": "Grilled Salmon",
            "averageRating": 4.8,
            "totalReviews": 52,
            "customerReviews": [
                {
                    "name": "Liam Davis",
                    "rating": 5,
                    "review": "The Grilled Salmon was cooked to perfection. The lemon pepper seasoning added a burst of flavor, and the fish was incredibly tender."
                },
                {
                    "name": "Ava Martinez",
                    "rating": 4.5,
                    "review": "I loved the simplicity and freshness of this dish. The salmon had a delicate smoky flavor from the grill."
                }
            ]
        },
        "tags": [
            "seafood",
            "grilled",
            "healthy",
            "flavorful"
        ],
        "type": "main course",
        "options": {
            "toppings": [],
            "sauce": [
                "Lemon butter sauce"
            ],
            "spiceLevel": []
        },
        "deliveryTime": 35,
        "fatContent": 15,
        "protein": 28,
        "salesAndOffers": [
            {
                "title": "Seafood Festival",
                "description": "Join us for our annual seafood festival and enjoy special discounts on grilled salmon and other seafood dishes.",
                "startDate": "2023-06-15",
                "endDate": "2023-06-30"
            },
            {
                "title": "Date Night Special",
                "description": "Indulge in a romantic dinner for two with a grilled salmon entrée and a complimentary dessert. Available on Friday and Saturday evenings.",
                "startDate": "2023-07-01",
                "endDate": "2023-07-31"
            },
            {
                "title": "Fresh Catch of the Day",
                "description": "Enjoy a discount on grilled salmon every Monday, as we feature the freshest catch of the day from local suppliers.",
                "startDate": "2023-06-01",
                "endDate": "2023-12-31"
            }
        ]
    },
    {
        "image": "/path4",
        "price": 6,
        "name": "Chocolate Brownie",
        "ingredients": {
            "herbs": [],
            "spices": [],
            "cheese": []
        },
        "description": "Treat yourself to a decadent and rich chocolate brownie. It's a delightful dessert with a fudgy texture and a luscious chocolate flavor.",
        "averageTimeToCook": 15,
        "supplements": {
            "beverages": [
                {
                    "name": "Hot Chocolate",
                    "description": "A comforting and creamy hot chocolate drink made with real chocolate. The perfect pairing for your chocolate brownie."
                },
                {
                    "name": "Espresso",
                    "description": "A strong and bold coffee option that complements the sweetness of the chocolate brownie. Sip and savor the flavors."
                }
            ],
            "foodDrinks": [
                {
                    "name": "Vanilla Ice Cream",
                    "description": "A classic choice to accompany your warm chocolate brownie. The cool and creamy vanilla ice cream creates a delicious contrast."
                },
                {
                    "name": "Mixed Berries",
                    "description": "A medley of fresh berries, including strawberries, blueberries, and raspberries. The fruity flavors balance the richness of the chocolate."
                }
            ]
        },
        "reviews": {
            "dishName": "Chocolate Brownie",
            "averageRating": 4.5,
            "totalReviews": 28,
            "customerReviews": [
                {
                    "name": "Mia Anderson",
                    "rating": 5,
                    "review": "The Chocolate Brownie was heavenly! It had the perfect amount of sweetness, and the texture was incredibly fudgy. Loved it!"
                },
                {
                    "name": "Noah Clark",
                    "rating": 4,
                    "review": "I'm a chocolate lover, and this brownie exceeded my expectations. It was moist and packed with intense chocolate flavor."
                }
            ]
        },
        "tags": [
            "dessert",
            "chocolate",
            "indulgent",
            "sweet"
        ],
        "type": "dessert",
        "options": {
            "toppings": [
                "Walnuts",
                "Whipped cream"
            ],
            "sauce": [],
            "spiceLevel": []
        },
        "deliveryTime": 25,
        "fatContent": 9,
        "protein": 4,
        "salesAndOffers": [
            {
                "title": "Sweet Tooth Combo",
                "description": "Pair your Chocolate Brownie with a scoop of ice cream and a choice of beverage at a discounted price.",
                "startDate": "2023-06-15",
                "endDate": "2023-06-30"
            },
            {
                "title": "Dessert Happy Hour",
                "description": "Enjoy 20% off on all desserts from 8 PM to 10 PM every day. Treat yourself after a long day.",
                "startDate": "2023-07-01",
                "endDate": "2023-07-31"
            },
            {
                "title": "Loyalty Rewards",
                "description": "Earn double loyalty points on any dessert purchase. Redeem your points for discounts or free desserts.",
                "startDate": "2023-06-01",
                "endDate": "2023-12-31"
            }
        ]
    },
    {
        "image": "/path5",
        "price": 5,
        "name": "Mango Smoothie",
        "ingredients": {
            "herbs": [],
            "spices": [],
            "cheese": []
        },
        "description": "Quench your thirst with a refreshing Mango Smoothie. Made with ripe mangoes and blended to perfection, it's a tropical delight in a glass.",
        "averageTimeToCook": 5,
        "supplements": {
            "beverages": [
                {
                    "name": "Strawberry Lemonade",
                    "description": "A sweet and tangy lemonade infused with juicy strawberry flavor. A vibrant and fruity choice to pair with your Mango Smoothie."
                },
                {
                    "name": "Coconut Water",
                    "description": "Hydrate with the natural goodness of coconut water. It complements the tropical flavors of the mango smoothie."
                }
            ],
            "foodDrinks": [
                {
                    "name": "Fresh Fruit Salad",
                    "description": "A bowl of assorted fresh fruits, including mangoes, strawberries, and pineapples. It enhances the tropical experience of the mango smoothie."
                },
                {
                    "name": "Yogurt Parfait",
                    "description": "Layers of creamy yogurt, granola, and mixed berries. A light and satisfying accompaniment to your mango smoothie."
                }
            ]
        },
        "reviews": {
            "dishName": "Mango Smoothie",
            "averageRating": 4.6,
            "totalReviews": 36,
            "customerReviews": [
                {
                    "name": "Sophia Thompson",
                    "rating": 4.5,
                    "review": "The Mango Smoothie was so refreshing! It had a strong and authentic mango flavor. Perfect for a hot summer day."
                },
                {
                    "name": "Lucas Rodriguez",
                    "rating": 4.7,
                    "review": "I loved the smooth texture and the sweetness of this mango smoothie. It instantly transported me to a tropical paradise."
                }
            ]
        },
        "tags": [
            "beverage",
            "smoothie",
            "tropical",
            "refreshing"
        ],
        "type": "beverage",
        "options": {
            "toppings": [
                "Mango chunks"
            ],
            "sauce": [],
            "spiceLevel": []
        },
        "deliveryTime": 15,
        "fatContent": 1,
        "protein": 2,
        "salesAndOffers": [
            {
                "title": "Smoothie Happy Hour",
                "description": "Enjoy 50% off on all smoothies from 2 PM to 4 PM every day. Beat the afternoon heat with a refreshing Mango Smoothie.",
                "startDate": "2023-06-15",
                "endDate": "2023-06-30"
            },
            {
                "title": "Summer Special",
                "description": "Buy one Mango Smoothie and get the second one at half price. Share the tropical goodness with a friend.",
                "startDate": "2023-07-01",
                "endDate": "2023-07-31"
            },
            {
                "title": "Frequent Sipper Rewards",
                "description": "Earn a free smoothie after purchasing 5 mango smoothies. Track your progress and enjoy the rewards.",
                "startDate": "2023-06-01",
                "endDate": "2023-12-31"
            }
        ]
    },
    {
        "image": "/path",
        "price": 12,
        "name": "Beef Stroganoff",
        "ingredients": {
            "herbs": [
                {
                    "name": "Dried Thyme",
                    "description": "Dried thyme is a versatile herb with a subtle, earthy flavor. It pairs well with meats, soups, and stews."
                }
            ],
            "spices": [
                {
                    "name": "Paprika",
                    "description": "Paprika is a vibrant red spice with a sweet and smoky flavor. It adds color and depth to various dishes."
                }
            ],
            "cheese": []
        },
        "description": "Indulge in the rich and creamy Beef Stroganoff made with tender beef strips, sautéed mushrooms, and onions in a flavorful sauce. Served with buttered noodles, this classic Russian dish is sure to satisfy your cravings.",
        "averageTimeToCook": 30,
        "supplements": {
            "beverages": [
                {
                    "name": "Red Wine",
                    "description": "A glass of red wine complements the flavors of the Beef Stroganoff, enhancing the dining experience."
                },
                {
                    "name": "Cranberry Juice",
                    "description": "Cranberry juice is a refreshing option that pairs well with the richness of the dish, balancing the flavors."
                }
            ],
            "foodDrinks": []
        },
        "reviews": {
            "dishName": "Beef Stroganoff",
            "averageRating": 4.8,
            "totalReviews": 15,
            "customerReviews": [
                {
                    "name": "Alex Thompson",
                    "rating": 5,
                    "review": "Absolutely delicious! The beef was tender, and the sauce was perfectly seasoned. A must-try for beef lovers.",
                    "date": "2023-06-05"
                },
                {
                    "name": "Sophia Wilson",
                    "rating": 4.5,
                    "review": "The Beef Stroganoff had a rich and creamy texture. The flavors were well-balanced and comforting.",
                    "date": "2023-06-01"
                },
                {
                    "name": "Oliver Johnson",
                    "rating": 5,
                    "review": "Amazing dish! The beef was cooked to perfection, and the sauce was full of flavor. Will order again.",
                    "date": "2023-05-28"
                }
            ]
        },
        "tags": [
            "rich",
            "creamy",
            "comforting",
            "savory",
            "hearty",
            "Russian cuisine",
            "beef"
        ],
        "type": "main course",
        "options": {
            "toppings": [],
            "sauce": [],
            "spiceLevel": []
        },
        "deliveryTime": 40,
        "fatContent": 18,
        "protein": 28,
        "salesAndOffers": []
    },
    {
        "image": "/path",
        "price": 15,
        "name": "Eggs Benedict",
        "ingredients": {
            "herbs": [],
            "spices": [],
            "cheese": []
        },
        "description": "Start your day with a classic Eggs Benedict. It features a perfectly poached egg served on a toasted English muffin with Canadian bacon and topped with creamy hollandaise sauce. Served with a side of crispy hash browns.",
        "averageTimeToCook": 20,
        "supplements": {
            "beverages": [
                {
                    "name": "Espresso",
                    "description": "Pair your Eggs Benedict with a strong and aromatic espresso for a delightful breakfast experience."
                },
                {
                    "name": "Fresh Orange Juice",
                    "description": "A glass of freshly squeezed orange juice provides a refreshing and citrusy addition to your breakfast."
                }
            ],
            "foodDrinks": []
        },
        "reviews": {
            "dishName": "Eggs Benedict",
            "averageRating": 4.6,
            "totalReviews": 22,
            "customerReviews": [
                {
                    "name": "Emma Davis",
                    "rating": 4.5,
                    "review": "The Eggs Benedict was delicious, and the hollandaise sauce was creamy and flavorful. A great breakfast option.",
                    "date": "2023-06-08"
                },
                {
                    "name": "William Anderson",
                    "rating": 4,
                    "review": "The poached egg was cooked perfectly, and the combination of flavors was delightful. Recommended for brunch.",
                    "date": "2023-06-02"
                },
                {
                    "name": "Sophie Clark",
                    "rating": 5,
                    "review": "One of the best Eggs Benedict I've had. The hollandaise sauce was spot on, and the muffin was toasted to perfection.",
                    "date": "2023-05-29"
                }
            ]
        },
        "tags": [
            "breakfast",
            "brunch",
            "eggs",
            "hollandaise sauce",
            "English muffin"
        ],
        "type": "breakfast",
        "options": {
            "toppings": [],
            "sauce": [],
            "spiceLevel": []
        },
        "deliveryTime": 25,
        "fatContent": 15,
        "protein": 12,
        "salesAndOffers": []
    },
    {
        "image": "/path",
        "price": 18,
        "name": "Beef Wellington",
        "ingredients": {
            "herbs": [
                {
                    "name": "Thyme",
                    "description": "Thyme is a fragrant herb with a subtle earthy flavor. It pairs well with beef and adds a delightful aroma to dishes."
                },
                {
                    "name": "Rosemary",
                    "description": "Rosemary is a woody herb with a strong pine-like fragrance. It complements the richness of beef and enhances the overall flavor."
                }
            ],
            "spices": [
                {
                    "name": "Salt",
                    "description": "Salt is a common seasoning used to enhance the taste of dishes. It helps to bring out the flavors of the ingredients."
                },
                {
                    "name": "Black Pepper",
                    "description": "Black pepper adds a mild spicy kick and a distinctive aroma to dishes. It complements the beef in this recipe."
                }
            ],
            "cheese": []
        },
        "description": "Indulge in the classic Beef Wellington, a tender beef fillet coated with a savory mixture of mushrooms, herbs, and pâté, all wrapped in a flaky puff pastry. Served with a side of roasted vegetables and a rich red wine sauce.",
        "averageTimeToCook": 60,
        "supplements": {
            "beverages": [
                {
                    "name": "Red Wine",
                    "description": "Pair your Beef Wellington with a glass of full-bodied red wine, such as Cabernet Sauvignon or Merlot, for a perfect flavor combination."
                },
                {
                    "name": "Mashed Potatoes",
                    "description": "Creamy mashed potatoes provide a comforting and delicious accompaniment to the rich flavors of Beef Wellington."
                }
            ],
            "foodDrinks": []
        },
        "reviews": {
            "dishName": "Beef Wellington",
            "averageRating": 4.8,
            "totalReviews": 30,
            "customerReviews": [
                {
                    "name": "Oliver Johnson",
                    "rating": 5,
                    "review": "The Beef Wellington was absolutely divine! The beef was perfectly cooked, and the puff pastry was flaky and golden. A gourmet delight.",
                    "date": "2023-06-10"
                },
                {
                    "name": "Emma Thompson",
                    "rating": 4.5,
                    "review": "I enjoyed the Beef Wellington, especially the combination of mushrooms and tender beef. The red wine sauce was a nice touch.",
                    "date": "2023-06-05"
                },
                {
                    "name": "Sophia Wilson",
                    "rating": 5,
                    "review": "The Beef Wellington exceeded my expectations. The flavors were exceptional, and the presentation was impressive. Highly recommended.",
                    "date": "2023-05-30"
                }
            ]
        },
        "tags": [
            "beef",
            "mushrooms",
            "puff pastry",
            "gourmet",
            "red wine sauce"
        ],
        "type": "main course",
        "options": {
            "toppings": [],
            "sauce": [],
            "spiceLevel": []
        },
        "deliveryTime": 40,
        "fatContent": 25,
        "protein": 28,
        "salesAndOffers": []
    },
    {
        "image": "/path",
        "price": 12,
        "name": "Caprese Salad",
        "ingredients": {
            "herbs": [
                {
                    "name": "Basil",
                    "description": "Basil is a fragrant herb with a sweet and slightly peppery taste. It pairs perfectly with fresh tomatoes and mozzarella in a Caprese salad."
                }
            ],
            "spices": [],
            "cheese": [
                {
                    "name": "Mozzarella",
                    "description": "Mozzarella is a soft and creamy cheese that adds a milky richness to the Caprese salad. It complements the tomatoes and basil."
                }
            ]
        },
        "description": "Enjoy a light and refreshing Caprese salad made with ripe tomatoes, fresh mozzarella cheese, and basil leaves. Drizzled with extra virgin olive oil and balsamic glaze for a burst of flavor.",
        "averageTimeToCook": 10,
        "supplements": {
            "beverages": [
                {
                    "name": "White Wine",
                    "description": "Pair your Caprese salad with a glass of crisp and chilled white wine, such as Sauvignon Blanc or Pinot Grigio, for a delightful combination."
                },
                {
                    "name": "Sparkling Water",
                    "description": "For a non-alcoholic option, opt for a glass of sparkling water to cleanse your palate and hydrate while enjoying the Caprese salad."
                }
            ],
            "foodDrinks": []
        },
        "reviews": {
            "dishName": "Caprese Salad",
            "averageRating": 4.7,
            "totalReviews": 25,
            "customerReviews": [
                {
                    "name": "Emily Davis",
                    "rating": 5,
                    "review": "The Caprese salad was simple yet bursting with flavors. The combination of tomatoes, mozzarella, and basil was perfect. A delightful appetizer.",
                    "date": "2023-06-09"
                },
                {
                    "name": "Liam Thompson",
                    "rating": 4.5,
                    "review": "I loved the freshness of the Caprese salad. The mozzarella was creamy, and the tomatoes were juicy. A great choice for a light meal.",
                    "date": "2023-06-03"
                },
                {
                    "name": "Olivia Wilson",
                    "rating": 4.8,
                    "review": "The Caprese salad was a fantastic starter. The ingredients were of high quality, and the balsamic glaze added a tangy sweetness.",
                    "date": "2023-05-28"
                }
            ]
        },
        "tags": [
            "salad",
            "tomatoes",
            "mozzarella",
            "basil",
            "balsamic glaze"
        ],
        "type": "appetizer",
        "options": {
            "toppings": [],
            "sauce": [],
            "spiceLevel": []
        },
        "deliveryTime": 15,
        "fatContent": 10,
        "protein": 8,
        "salesAndOffers": []
    },
    {
        "image": "/path",
        "price": 22,
        "name": "Grilled Salmon with Lemon Butter Sauce",
        "ingredients": {
            "herbs": [
                {
                    "name": "Dill",
                    "description": "Dill is a fragrant herb with a fresh and grassy flavor. It pairs well with salmon and adds a delightful aroma to the dish."
                }
            ],
            "spices": [
                {
                    "name": "Garlic Powder",
                    "description": "Garlic powder adds a savory and slightly pungent taste to the grilled salmon. It enhances the overall flavor profile."
                },
                {
                    "name": "Paprika",
                    "description": "Paprika adds a subtle smoky and sweet flavor to the grilled salmon. It also lends a vibrant red color to the dish."
                }
            ],
            "cheese": []
        },
        "description": "Savor the succulent Grilled Salmon with a tangy Lemon Butter Sauce. The salmon fillet is perfectly grilled, served with a side of roasted vegetables and creamy mashed potatoes.",
        "averageTimeToCook": 25,
        "supplements": {
            "beverages": [
                {
                    "name": "Chardonnay",
                    "description": "Pair your Grilled Salmon with a glass of buttery and oaky Chardonnay for a perfect match of flavors."
                },
                {
                    "name": "Iced Tea",
                    "description": "For a refreshing non-alcoholic option, enjoy a glass of iced tea to complement the Grilled Salmon."
                }
            ],
            "foodDrinks": []
        },
        "reviews": {
            "dishName": "Grilled Salmon with Lemon Butter Sauce",
            "averageRating": 4.9,
            "totalReviews": 35,
            "customerReviews": [
                {
                    "name": "William Johnson",
                    "rating": 5,
                    "review": "The Grilled Salmon was cooked to perfection, and the lemon butter sauce added a zesty and buttery goodness. A seafood lover's delight.",
                    "date": "2023-06-08"
                },
                {
                    "name": "Sophia Davis",
                    "rating": 4.8,
                    "review": "I thoroughly enjoyed the Grilled Salmon. The fish was moist, and the lemon butter sauce was a delightful accompaniment.",
                    "date": "2023-06-02"
                },
                {
                    "name": "Oliver Thompson",
                    "rating": 5,
                    "review": "The Grilled Salmon exceeded my expectations. It was flavorful and juicy, and the lemon butter sauce was heavenly. Highly recommended.",
                    "date": "2023-05-27"
                }
            ]
        },
        "tags": [
            "salmon",
            "lemon butter sauce",
            "grilled",
            "seafood",
            "roasted vegetables"
        ],
        "type": "main course",
        "options": {
            "toppings": [],
            "sauce": [],
            "spiceLevel": []
        },
        "deliveryTime": 35,
        "fatContent": 18,
        "protein": 26,
        "salesAndOffers": []
    },
    {
        "image": "/path",
        "price": 14,
        "name": "Margherita Pizza",
        "ingredients": {
            "herbs": [
                {
                    "name": "Basil",
                    "description": "Basil is a fragrant herb with a sweet and slightly peppery taste. It is a key ingredient in the classic Margherita pizza."
                }
            ],
            "spices": [],
            "cheese": [
                {
                    "name": "Mozzarella",
                    "description": "Mozzarella is a soft and creamy cheese that melts beautifully on a Margherita pizza, providing a delicious cheesy topping."
                }
            ]
        },
        "description": "Treat yourself to a traditional Margherita pizza with a thin and crispy crust topped with fresh tomato sauce, mozzarella cheese, and fragrant basil leaves. A classic Italian delight.",
        "averageTimeToCook": 20,
        "supplements": {
            "beverages": [
                {
                    "name": "Peroni",
                    "description": "Pair your Margherita pizza with a cold bottle of Peroni, an Italian lager, for an authentic Italian dining experience."
                },
                {
                    "name": "Soda",
                    "description": "If you prefer a non-alcoholic option, enjoy a refreshing soda to accompany your Margherita pizza."
                }
            ],
            "foodDrinks": []
        },
        "reviews": {
            "dishName": "Margherita Pizza",
            "averageRating": 4.6,
            "totalReviews": 28,
            "customerReviews": [
                {
                    "name": "Emma Wilson",
                    "rating": 5,
                    "review": "The Margherita pizza was fantastic! The crust was perfectly crispy, and the combination of tomato, mozzarella, and basil was delightful.",
                    "date": "2023-06-07"
                },
                {
                    "name": "Liam Davis",
                    "rating": 4.5,
                    "review": "I enjoyed the simplicity of the Margherita pizza. The flavors were well-balanced, and the basil added a fresh touch.",
                    "date": "2023-06-01"
                },
                {
                    "name": "Olivia Johnson",
                    "rating": 4.8,
                    "review": "The Margherita pizza was delicious. The crust had a nice crunch, and the tomato sauce was tangy. A classic choice.",
                    "date": "2023-05-26"
                }
            ]
        },
        "tags": [
            "pizza",
            "tomato sauce",
            "mozzarella",
            "basil",
            "thin crust"
        ],
        "type": "main course",
        "options": {
            "toppings": [],
            "sauce": [],
            "spiceLevel": []
        },
        "deliveryTime": 30,
        "fatContent": 12,
        "protein": 10,
        "salesAndOffers": []
    },
    {
        "image": "/path",
        "price": 16,
        "name": "Crème Brûlée",
        "ingredients": {
            "herbs": [],
            "spices": [],
            "cheese": []
        },
        "description": "Indulge in the luscious and creamy Crème Brûlée, a classic French dessert consisting of a rich custard topped with a caramelized sugar crust. Served chilled for the perfect finale to your meal.",
        "averageTimeToCook": 90,
        "supplements": {
            "beverages": [
                {
                    "name": "Espresso",
                    "description": "Pair your Crème Brûlée with a cup of strong and aromatic espresso for a delightful contrast of flavors."
                },
                {
                    "name": "Digestif",
                    "description": "Complete your dining experience with a digestif, such as a glass of Cognac or a liqueur, to complement the sweetness of the Crème Brûlée."
                }
            ],
            "foodDrinks": []
        },
        "reviews": {
            "dishName": "Crème Brûlée",
            "averageRating": 4.9,
            "totalReviews": 32,
            "customerReviews": [
                {
                    "name": "William Davis",
                    "rating": 5,
                    "review": "The Crème Brûlée was divine! The custard was velvety smooth, and the caramelized sugar crust added a delightful crunch. A true indulgence.",
                    "date": "2023-06-06"
                },
                {
                    "name": "Sophia Thompson",
                    "rating": 4.8,
                    "review": "I loved the Crème Brûlée. The custard was perfectly set, and the caramelized sugar was a delight to crack into. A must-try dessert.",
                    "date": "2023-05-31"
                },
                {
                    "name": "Oliver Davis",
                    "rating": 5,
                    "review": "The Crème Brûlée was heavenly. The custard was rich and creamy, and the caramelized sugar crust was perfectly caramelized. Absolutely delicious.",
                    "date": "2023-05-25"
                }
            ]
        },
        "tags": [
            "dessert",
            "custard",
            "caramelized sugar",
            "French",
            "creamy"
        ],
        "type": "dessert",
        "options": {
            "toppings": [],
            "sauce": [],
            "spiceLevel": []
        },
        "deliveryTime": 45,
        "fatContent": 20,
        "protein": 6,
        "salesAndOffers": []
    }
]



export default data