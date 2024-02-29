
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./productpage.css"
import { Cake, SelectQuantity } from '../../Home/Components';

export default function ProductPage({ url }: { url: string }) {
  const { id } = useParams();
  const [cake, setCake] = useState<Cake | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCake() {
      try {
        const response = await fetch(`${url}/${id}`);
        const data: Cake = await response.json();
        setCake(data);
      } catch (error) {
        console.error("Error loading content", error);
        setError("Error loading content");
      }
    }

    fetchCake();
  }, [id, url]); 

  if (error) {
    return <div>Error loading cake: {error}</div>;
  }

  if (!cake) {
    return <div>Loading...</div>;
  }

  return (
    
    <div className='product-detail'>
      <img src={`/${cake.image}`} className="cake-image-product" />
      <h3 className='cake-name'>{cake.name}</h3>
      <p className='cake-description'>{cake.description}</p>
      <p className='cake-rating'>⭐ {cake.rating}</p>
      <span className='cake-price'>{cake.price} €</span>
      <SelectQuantity cake={cake}/>
      
    </div>
  );
}
