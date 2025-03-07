import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddressPage = () => {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/addresses")
      .then((res) => res.json())
      .then((data) => setAddresses(data))
      .catch((error) => console.error("Error fetching addresses:", error));
  }, []);

  const handleSelectAddress = (address) => {
    setSelectedAddress(address);
  };

  const handleConfirmAddress = () => {
    if (!selectedAddress) {
      alert("Please select an address!");
      return;
    }
    alert(`Order placed with address: ${selectedAddress}`);
    navigate("/order-summary");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Select Address</h2>

      {addresses.length === 0 ? (
        <p>Loading addresses...</p>
      ) : (
        addresses.map((address) => (
          <div 
            key={address.id} 
            className={`p-2 border rounded mb-2 cursor-pointer ${
              selectedAddress === address.id ? "bg-blue-300" : "bg-gray-100"
            }`}
            onClick={() => handleSelectAddress(address.id)}
          >
            <p>{address.street}, {address.city}, {address.state}, {address.zip}</p>
          </div>
        ))
      )}

      <button 
        onClick={handleConfirmAddress} 
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        Confirm Address
      </button>
    </div>
  );
};

export default AddressPage;
