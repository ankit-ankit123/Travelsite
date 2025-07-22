import { useSelector, useDispatch } from "react-redux";
import { toggleWishlist } from "../store/wishlistSlice"; // ✅ Import the new action
import Header from "../components/Header";
import Footer from "../components/Footer";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);

  function removeItem(item) {
    dispatch(toggleWishlist(item)); // ✅ Toggle to remove
  }

  return (
    <div className="bg-slate-100 min-h-screen">
      <Header className="shadow-lg bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 text-white backdrop-blur-md" />
      <div className="flex justify-center  px-2 sm:px-4 md:px-8">
        <div className="w-full max-w-4xl p-4 bg-white rounded-md shadow-2xl mt-4">
          <div className="flex justify-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">My Wishlist</h2>
          </div>

          {wishlist.length === 0 ? (
            <p className="text-center text-gray-600">No items in your wishlist.</p>
          ) : (
            wishlist.map((item) => (
              <div key={item.id} className="mt-4 flex justify-center">
                <div className="w-full sm:w-[90%] border border-slate-300 rounded-md shadow-xl p-4 bg-slate-50">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    <img
                      src={item.image}
                      className="w-full sm:w-52 h-40 object-cover rounded"
                      alt={item.name}
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-lg sm:text-2xl">{item.name}</p>
                      <p className="text-base sm:text-xl text-pink-500 mt-1">{item.city}</p>
                    </div>
                    {/* ✅ Red dustbin icon */}
                    <button
                      onClick={() => removeItem(item)}
                      className="cursor-pointer mt-2 sm:mt-0"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        width="24"
                        viewBox="0 -960 960 960"
                        fill="#BB271A"
                      >
                        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm80-160h80v-360h-80v360Zm160 0h80v-360h-80v360Zm-240-440v520h400v-520H280Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer className="bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 text-white shadow-inner backdrop-blur-md" />
    </div>
  );
};

export default Wishlist;