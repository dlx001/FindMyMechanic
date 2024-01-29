"use client"
import { useEffect, useState } from 'react';
import { searchMechanicShops } from '../api/mapsService';

const MechanicShops = () => {
  const [mechanicShops, setMechanicShops] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => { 
      const shops = await searchMechanicShops();
      console.log(shops + "shops");
      setMechanicShops(shops);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Mechanic Shops Near You</h1>
      <ul>
        {mechanicShops.map((shop) => (
          <div className="pb-6 pt-8" key={shop.place_id}>
            <p>{shop.name}</p>
            <p>{shop.formatted_address} {shop.user_ratings_total}</p>
            <p>{shop.rating}</p>
            <img src={shop.icon}></img>

          </div>
          
        ))}
      </ul>
    </div>
  );
};

export default MechanicShops;
