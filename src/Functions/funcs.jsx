import FishCard from '../componants/FishCard';


export const fishGenerator = (arr) => {
    let fish = arr.map((item, index) => (
        <FishCard
            key={index}
            image={item.image}
            name={item.name}
            waterType={item.waterType}
            DangerOfExtinction={item.DangerOfExtinction}
            color={item.color}
  
        />
    ));
    return fish;
  }

 // In your Functions/funcs.js or wherever you define utility functions

export const filteredFish = (arr, filter, value) => {
  value = value.toLowerCase().trim(); 

  const newArr = arr.filter(item => {
    
    return item[filter].toLowerCase().includes(value);
  });

  return newArr.length > 0 ? newArr : arr; 
};
