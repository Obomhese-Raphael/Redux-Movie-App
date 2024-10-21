import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../Components/Card";

const SearchPage = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const navigate = useNavigate();
  const query = location?.search.slice(3);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/search/multi`, {
        params: {
          query: location?.search?.slice(3),
          page: pageNumber,
        },
      });
      setData((preve) => {
        return [...preve, ...response.data.results];
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (query) {
      setPageNumber(1);
      setData([]);
      fetchData();
    }
  }, [location?.search]);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPageNumber((preve) => preve + 1);
    }
  };

  useEffect(() => {
    if (query) {
      fetchData();
    }
  }, [pageNumber]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="py-16">
      <div className="lg:hidden my-2 mx-1 sticky top-[70px] z-30">
        <input
          type="text"
          placeholder="Search here..."
          onChange={(e) => navigate(`/search?q=${e.target.value}`)}
          className="px-4 py-1 text-lg w-full bg-white rounded-full text-neutral-900"
          value={query?.split("%20").join(" ")}
        />
      </div>
      <div className="container mx-auto">
        <h3 className="capitalize text-lg lg:text-xl font-semibold my-3">
          Search Results
        </h3>
        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-4 justify-center lg:justify-start">
          {data.map((searchData, index) => {
            return (
              <div key={index}>
                <Card
                  data={searchData}
                  key={searchData.id + "exploreSection"}
                  media_type={searchData.media_type}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
