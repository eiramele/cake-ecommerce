import { getData } from "../../../services";
import "./home.css";
import "/src/App.css";

export interface Cake {
  id: number;
  name: string;
  price: number;
  stock: number;
  image: string;
  description: string;
  rating: string;
}

const cakes = [
  {
    id: "1",
    name: "Vanilla Cake",
    price: 14.99,
    stock: 11,
    image: "src/assets/images/vanilla-cake.webp",
    description: "Classic vanilla cake with velvety vanilla buttercream.",
    rating: "4.5",
  },
  {
    id: "2",
    name: "Chocolate Heaven",
    price: 18.99,
    stock: 5,
    image: "src/assets/images/chocolate-cake.webp",
    description: "Decadent chocolate cake with layers of chocolate ganache.",
    rating: "4.8",
  },
  {
    id: "3",
    name: "Classic Cheesecake",
    price: 20,
    stock: 7,
    image: "src/assets/images/cheesecake.webp",
    description: "Smooth and creamy cheesecake with a graham cracker crust.",
    rating: "4.7",
  },
  {
    id: "4",
    name: "Carrot Cake",
    price: 17.5,
    stock: 8,
    image: "src/assets/images/carrot-cake.webp",
    description:
      "Moist carrot cake with walnuts and a smooth cream cheese frosting.",
    rating: "4.6",
  },
  {
    id: "5",
    name: "Strawberry Shortcake",
    price: 16.75,
    stock: 12,
    image: "src/assets/images/strawberry-cake.webp",
    description:
      "Light and fluffy shortcake with fresh strawberries and whipped cream.",
    rating: "4.7",
  },
  {
    id: "6",
    name: "Lemon Pie",
    price: 15,
    stock: 9,
    image: "src/assets/images/lemon-pie.webp",
    description:
      "Tart and refreshing lemon pie with a buttery crust and meringue topping.",
    rating: "4.6",
  },
];

function CakeObj({ cake }: { cake: Cake }) {
  return (
    <li className="cake-li">
      <div className="image-container">
        <img src={cake.image} className="cake-image" />
      </div>
      <h4>{cake.price} €</h4>
      <h4>{cake.name}</h4>
    </li>
  );
}

export default function CakeObjList() {
  return (
    <ul>
      {cakes.map((cake) => (
        <CakeObj cake={cake} key={cake.id} />
      ))}
    </ul>
  );
}
