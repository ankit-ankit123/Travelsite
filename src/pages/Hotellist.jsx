import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../store/wishlistSlice";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const Hotellist = () => {
  
  const [selected, setSelected] = useState("IN");
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const hotelsPerPage = 5;

  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist); // Get wishlist

  const handleWishlist = (hotel) => {
    dispatch(toggleWishlist(hotel)); // Toggle wishlist
  };


  const handleSearch = async (countryCode) => {
    try {
      const url = `https://api.liteapi.travel/v3.0/data/hotels?countryCode=${countryCode}`
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "X-API-Key": "sand_b02a0c0c-9ad6-4586-8efb-9584a34344e8",
          Accept: "application/json",
        },
      });

      const data = await response.json();

      const filteredData = data.data.map((hotel) => ({
        name: hotel.name,
        city: hotel.city,
        image: hotel.main_photo,
        id: hotel.id,
      }));
      setResults(filteredData);
      setCurrentPage(1); // reset page on new search
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleSearch(selected);
  }, [selected]);

  // Pagination logic
  const totalPages = Math.ceil(results.length / hotelsPerPage);
  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const currentHotels = results.slice(indexOfFirstHotel, indexOfLastHotel);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getPaginationRange = () => {
    const totalPageNumbersToShow = 4;
    const range = [];

    if (totalPages <= totalPageNumbersToShow + 2) {
      for (let i = 1; i <= totalPages; i++) range.push(i);
    } else {
      if (currentPage <= 3) {
        range.push(1, 2, 3, 4, "...");
      } else if (currentPage >= totalPages - 2) {
        range.push(
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        range.push(
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "..."
        );
      }
    }

    return range;
  };
  const paginationRange = getPaginationRange();

  const navigate = useNavigate();
  const detail = (hotel) => {
    navigate("/detail", { state: { id: hotel.id } });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Header className="shadow-lg bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 text-white backdrop-blur-md" />

      <div className="max-w-4xl mx-auto bg-white p-4 shadow rounded mt-6">
        <div className="flex justify-center mb-4">
          <select
            className="border px-4 py-2 rounded"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="IN">India</option>
            <option value="US">US</option>
            <option value="AU">Australia</option>
            <option value="PK">Pakistan</option>
            <option value="JP">Japan</option>
            <option value="GE">Germany</option>
            <option value="IL">Israel</option>
            <option value="MR">Mauritania</option>
            <option value="NP">Nepal</option>
            <option value="RU">Russia</option>
          </select>
        </div>

        <p className="text-center mb-6 text-lg text-blue-700">
          Selected Country: {selected}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {currentHotels.length > 0 ? (
            currentHotels.map((hotel) => {
              const isInWishlist = wishlist.some((item) => item.id === hotel.id);
              return (
                <div
                  key={hotel.id}
                  className="border p-4 rounded bg-white shadow"
                >
                  <div onClick={() => detail(hotel)} className="cursor-pointer">
                    <h3 className="font-bold text-lg">{hotel.name}</h3>
                    <p className="text-gray-600">{hotel.city}</p>
                    {hotel.image && (
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="mt-2 w-full h-40 object-cover rounded"
                      />
                    )}
                  </div>

                  {/* ❤️ Heart icon */}
                  <button
                    onClick={() => handleWishlist(hotel)}
                    className="mt-2 cursor-pointer"
                  >
                    {isInWishlist ? (
                      <MdFavorite size={24} color="#FF0000" /> // ❤️ Filled
                    ) : (
                      <MdFavoriteBorder size={24} color="#000000" /> // 🤍 Unfilled
                    )}
                  </button>
                </div>
              );
            })
          ) : (
            <p className="text-center col-span-full text-gray-500">
              Loading or no data available.
            </p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            {paginationRange.map((item, index) =>
              item === "..." ? (
                <span key={index} className="px-3 py-1 text-gray-500">
                  ...
                </span>
              ) : (
                <button
                  key={index}
                  onClick={() => paginate(item)}
                  className={`px-3 py-1 border rounded ${
                    item === currentPage
                      ? "bg-blue-500 text-white"
                      : "bg-white text-blue-500 hover:bg-blue-100"
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </div>
        )}
      </div>

      <Footer className="bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 text-white shadow-inner backdrop-blur-md" />
    </div>
  );
};

export default Hotellist;