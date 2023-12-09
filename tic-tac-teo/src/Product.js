import React, { useState, useEffect } from "react";

function Product() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [purchaseDate, setPurchasedDate] = useState(null);
  const [purchaseTime, setPurchaseTime] = useState(null);
  const [currentSelectedItemIndex, setcurrentSelectedItemIndex] = useState(0);
  const [userAddress, setUserAddress] = useState('');
  const [showAddressInput, setShowAddressInput] = useState(true);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [discount, setDiscount] = useState(0); 
  const [discountApplied, setDiscountApplied] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);

  const fetchData = () => {
    if (userAddress) {
      fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&address=${userAddress}`)
        .then((response) => response.json())
        .then((productData) => {
          setProducts(productData);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
        });
    }
  };

  useEffect(() => {
    fetchData();
  }, [userAddress]);

  const handleBuyNow = (product) => {
    setSelectedProducts([...selectedProducts, product]);
    setIsPurchased(true);
  };

  const handleRemoveProduct = (product) => {
    const updatedProducts = selectedProducts.filter((p) => p.id !== product.id);
    setSelectedProducts(updatedProducts);
  };

  const totalAmount = selectedProducts.reduce(
    (total, product) => total + parseFloat(product.price),
    0
  );

  const discountedAmount = totalAmount - (totalAmount * discount) / 100;
  const formattedTotalAmount = discountedAmount.toFixed(2);

  const currentDate = new Date();
  const optionsDate = { year: "numeric", month: "long", day: "numeric" };
  const formattedPurchaseDate = currentDate.toLocaleDateString(undefined, optionsDate);

  const optionsTime = { hour: "2-digit", minute: "2-digit" };
  const formattedPurchaseTime = currentDate.toLocaleTimeString(undefined, optionsTime);

  useEffect(() => {
    setPurchasedDate(formattedPurchaseDate);
    setPurchaseTime(formattedPurchaseTime);
  }, []);

  const currentSelectedItem = products[currentSelectedItemIndex];

  const handleAddressSubmit = () => {
    setShowAddressInput(false);
    setDeliveryAddress(userAddress);
  };

  const handleDiscountChange = () => {
    // Set a fixed 10% discount
    const fixedDiscountPercentage = 10;
    setDiscount(fixedDiscountPercentage);
    setDiscountApplied(true);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow p-4">
      <h1 className="text-2xl font-semibold mb-4 text-center">Maybelline Products</h1>
      {showAddressInput ? (
        <div className="mb-4 flex items-center justify-center">
          <label className="block text-sm font-medium text-gray-700">
            <input
              className="mt-1 p-2 border rounded-md w-half mx-auto my-auto"
              type="text"
              placeholder="Enter your Address"
              value={userAddress}
              onChange={(e) => setUserAddress(e.target.value)}
            />
          </label>
          {userAddress.trim() ? (
            <button
              className="mt-1 px-1 py-1 bg-yellow-500 text-white rounded-md hover:bg-blue-600"
              onClick={handleAddressSubmit}
            >
              Submit Address
            </button>
          ) : null}
        </div>
      ) : null}
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-red-600">Error: {error.message}</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <div className="bg-white border border-gray-200 rounded-lg shadow p-4" key={product.id}>
              <a href="#">
                <img
                  className="rounded-t-lg mx-auto"
                  src={product.image_link}
                  alt={product.name}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-lg font-semibold mb-2">
                  Product Brand Name: {product.brand}
                </h2>
                <h2 className="mb-3">
                  <strong>Product ID: {product.id}</strong>
                </h2>
                <h2 className="mb-3">
                  <strong>Product Name: {product.name}</strong>
                </h2>
                <p className="mb-3">
                  <strong>Price of product: ${product.price}</strong>
                </p>
                {selectedProducts.some((selectedProduct) => selectedProduct.id === product.id) ? (
                  <button
                    type="button"
                    className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                    onClick={() => handleRemoveProduct(product)}
                  >
                    Remove from Card
                  </button>
                ) : (
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => handleBuyNow(product)}
                  >
                    <svg
                      className="w-3.5 h-3.5 mr-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 21"
                    >
                      <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                    </svg>
                    Buy now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      {isPurchased && (
      <div className="selected-products">
        <h2 className="text-xl font-semibold mb-4 mt-8 text-center">Your purchased product</h2>
        <div className="text-xl font-semibold mb-4 mt-8 text-right">
          <p>Your total products: {selectedProducts.length}</p>
          <h3>Total Amount: ${formattedTotalAmount}</h3>
          {! discountApplied && (
          <button
            className="mt-1 px-1 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
            onClick={handleDiscountChange}
          >
            Click here for discount
          </button>
          )}
        </div>
        {selectedProducts.map((selectedProduct, index) => (
          <div key={selectedProduct.id} className="mb-4">
            <h3 className="text-xl font-semibold mb-4 mt-8">Your product no: {index + 1}</h3>
            <img src={selectedProduct.image_link} alt={selectedProduct.name} />
            <p className="text-lg font-semibold mb-2">
              Delivery Address: {deliveryAddress}
            </p>
            <h3>{selectedProduct.name}</h3>
            <p>Brand: {selectedProduct.brand}</p>
            <p>Price: ${selectedProduct.price}</p>
            <p>Purchase date: {purchaseDate}</p>
            <p>Time of purchased: {purchaseTime}</p>
          </div>
        ))}
      </div>
      )}
    </div>
  );
}

export default Product;
