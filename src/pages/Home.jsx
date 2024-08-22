import React, { useEffect, useState } from 'react';
import Header from '../componants/Header';
import Footer from '../componants/Footer';
import Button from '../componants/Button';
import phoneArray from '../phoneArray.json';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { sliceTheArray } from '../hooks/utils';
// import { useCart } from '../context/cartContext';
import useCart from '../hooks/useCart';



const Home = () => {
  const [value, setValue] = useState('');
  const [choose, setChoose] = useState('price');
  const [filteredArr, setFilteredArr] = useState([]);
  const [currentArr, setCurrentArr] = useState([]);
  const [btnNumber, setBtnNumber] = useState(1);
  const [addedProducts, setAddedProducts] = useState([]);

  const { addToCart } = useCart(); // Access addToCart using useCart hook

  // const addToCart=()=>{
  //   console.log("fff")
  // }

  useEffect(() => {
    setFilteredArr(phoneArray);
    setCurrentArr(sliceTheArray(phoneArray, 1));
    const storedProducts = JSON.parse(localStorage.getItem('product')) || [];
    setAddedProducts(storedProducts);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const newArr = filteredPhone(phoneArray, choose, value);
    setFilteredArr(newArr);
    setCurrentArr(sliceTheArray(newArr, 1));
    setBtnNumber(1);
  };

  const handleReset = () => {
    setValue('');
    setChoose('price');
    setFilteredArr(phoneArray);
    setCurrentArr(sliceTheArray(phoneArray, 1));
    setBtnNumber(1);
  };

  const handleButtonClick = (pageNumber) => {
    setCurrentArr(sliceTheArray(filteredArr, pageNumber));
    setBtnNumber(pageNumber);
  };

  const nextBtn = () => {
    if (btnNumber < Math.ceil(filteredArr.length / 3)) {
      handleButtonClick(btnNumber + 1);
    }
  };

  const backBtn = () => {
    if (btnNumber > 1) {
      handleButtonClick(btnNumber - 1);
    }
  };

  const buttonsGenerator = (numOfButtons) => (
    Array.from({ length: numOfButtons }, (_, i) => (
      <Button
        key={i + 100}  // Unique key generation
        number={i + 1}
        func={() => handleButtonClick(i + 1)}
        page={btnNumber}
      />
    ))
  );
  
  

  const filteredPhone = (phones, criterion, value) => {
    if (!value) return phones;

    if (criterion === 'price') {
      return phones.filter(phone => phone.price <= parseFloat(value));
    }

    if (criterion === 'storage') {
      return phones.filter(phone => {
        const match = phone.description.match(/(\d+)GB/);
        if (match) {
          const storageSize = parseInt(match[1], 10);
          return storageSize === parseInt(value, 10);
        }
        return false;
      });
    }

    return phones.filter(phone => phone[criterion]?.toString().toLowerCase().includes(value.toLowerCase()));
  };

  const handleAddToCart = (phone) => {
    addToCart(phone); // Add product to cart using the context
    alert(`${phone.model} has been added to your cart.`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-green-50 via-purple-50 to-gray-50">
      <Header title="Home" />
      <main className="flex-grow bg-gradient-to-r from-green-50 via-purple-50 to-gray-50 mt-[180px] mb-[100px]">
        {/* Carousel */}
        <div className="bg-white carousel-container mt-12 w-full md:w-[1200px] h-[600px] relative shadow-xl mx-auto rounded-3xl p-5 mb-20">
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={5000}
          >
            {['carouselPic1.jpeg', 'carouselPic2.jpeg', 'carouselPic3.jpeg'].map((src, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  width={1200}
                  height={600}
                  src={`./images/${src}`}
                  alt={`Slide ${index + 1}`}
                  className="object-contain rounded-3xl"
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Search Form */}
        <div className="pt-12 text-xl px-10 md:px-40 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to PhoneStore</h1>
          <p className="text-lg mb-8">Discover the latest and greatest in mobile technology. Shop our collection of smartphones and accessories today!</p>
          <form onSubmit={handleSearch} className="mt-8 mb-4 max-w-lg mx-auto flex items-center justify-center">
            <input
              id="search"
              type="text"
              placeholder="Enter value to search"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="h-10 m-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <select
              value={choose}
              onChange={(e) => setChoose(e.target.value)}
              className="h-10 px-3 m-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="price">max-Price</option>
              <option value="model">Model</option>
              <option value="storage">Storage</option>
            </select>
            <button
              type="submit"
              className="h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Search
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="h-10 bg-gray-500 hover:bg-gray-700 text-white font-bold px-4 rounded ml-4 focus:outline-none focus:shadow-outline"
            >
              Reset
            </button>
          </form>
        </div>

        {/* Featured Products */}
        <section className="pt-12 text-xl px-10 md:px-40 text-center">
          <h2 className="text-3xl font-semibold mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentArr.map(phone => (
              <div key={phone.id} className="border p-4 rounded-lg shadow-lg">
                <img src={phone.image} alt={phone.model} className="w-full h-auto mb-4 rounded-lg" />
                <h3 className="text-2xl font-bold">{phone.model}</h3>
                <p className="text-lg">${phone.price}</p>
                <button
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                  onClick={() => handleAddToCart(phone)}
                >
                  Add to Cart
                </button>
              </div>
            ))}

          </div>
        </section>

        {/* Pagination */}
        <div className="flex w-full md:w-2/3 lg:w-1/2 mx-auto justify-around my-8">
          <Button dis={btnNumber === 1} number="Back" name="Back" func={backBtn} />
          {buttonsGenerator(Math.ceil(filteredArr.length / 3))}
          <Button dis={btnNumber === Math.ceil(filteredArr.length / 3)} number="Next" name="Next" func={nextBtn} />
        </div>

        {/* Why Choose Us */}
        <section className="pt-12 text-xl px-10 md:px-40 text-center">
          <h2 className="text-3xl font-semibold mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Wide Selection', description: 'We offer a wide variety of smartphones from top brands to ensure you find the perfect device for your needs.' },
              { title: 'Competitive Prices', description: 'Get the best deals on the latest smartphones without breaking the bank. Shop with us and save!' },
              { title: 'Expert Support', description: 'Our knowledgeable staff is here to help you with any questions or issues you may have, ensuring a smooth shopping experience.' },
              { title: 'Fast Shipping', description: 'Enjoy fast and reliable shipping on all orders. Get your new smartphone delivered to your doorstep quickly and efficiently.' }
            ].map((reason, index) => (
              <div key={index} className="border p-4 rounded-lg shadow-lg bg-white">
                <h3 className="text-2xl font-bold mb-2">{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
