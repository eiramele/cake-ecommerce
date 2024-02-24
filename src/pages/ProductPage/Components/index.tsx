import { Cake } from "../../Home/Components";

export function ProductPage({ cake }: { cake: Cake }) {
  return (
    <div>
      <p>{cake.name}</p>
      <p>{cake.description}</p>
    </div>
  );
}
