import { notFound } from "next/navigation";

export function getCategory(category){
  const data = {
    "tops": [
      {
        "id": 1,
        "name": "Shirt",
        "price": 20.00,
        "image": "/images/shirt.png"
      },
      {
        "id": 2,
        "name": "Shirt",
        "price": 20.00,
        "image": "/images/shirt.png"
      },
      {
        "id": 3,
        "name": "Shirt",
        "price": 20.00,
        "image": "/images/shirt.png"
      },
      {
        "id": 4,
        "name": "Shirt",
        "price": 20.00,
        "image": "/images/shirt.png"
      }
    ],
    "bottoms": [
      {
        "id": 5,
        "name": "Shorts",
        "price": 39.00,
        "image": "/images/shorts.png"
      },
      {
        "id": 6,
        "name": "Shorts",
        "price": 39.00,
        "image": "/images/shorts.png"
      },
      {
        "id": 7,
        "name": "Shorts",
        "price": 39.00,
        "image": "/images/shorts.png"
      },
      {
        "id": 8,
        "name": "Shorts",
        "price": 39.00,
        "image": "/images/shorts.png"
      },
      {
        "id": 9,
        "name": "Shorts",
        "price": 39.00,
        "image": "/images/shorts.png"
      },
      {
        "id": 10,
        "name": "Shorts",
        "price": 39.00,
        "image": "/images/shorts.png"
      },
      {
        "id": 11,
        "name": "Shorts",
        "price": 39.00,
        "image": "/images/shorts.png"
      },
      {
        "id": 12,
        "name": "Shorts",
        "price": 39.00,
        "image": "/images/shorts.png"
      }
    ],
    "accessories": [
      {
        "id": 13,
        "name": "Glasses",
        "price": 15.00,
        "image": "/images/glasses.png"
      },
      {
        "id": 14,
        "name": "Glasses",
        "price": 15.00,
        "image": "/images/glasses.png"
      }
    ]
  }

  if(data[category] == undefined){
    notFound();
  }
  
  return data[category];

};