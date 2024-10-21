import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/Card";

const Explore = () => {
  const params = useParams();
  const [pageNumber, setPageNumber] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNumber, setTotalPageNumber] = useState(0);

  console.log("params", params.explore);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/discover/${params.explore}`, {
        params: {
          page: pageNumber,
        },
      });
      setData((preve) => {
        return [...preve, ...response.data.results];
      });
      setTotalPageNumber(response.data.total_pages);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPageNumber((preve) => preve + 1);
    }
  };

  useEffect(() => {
    const updatedParams =
      params.explore === "movies" ? "movie" : params.explore;
    fetchData(updatedParams);
  }, [pageNumber]);

  useEffect(() => {
    const updatedParams =
      params.explore === "movies" ? "movie" : params.explore;
    setPageNumber(1);
    setData([]);
    fetchData(updatedParams);
  }, [params.explore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className="py-16">
      <div className="container mx-auto">
        <h3 className="capitalize text-lg lg:text-2xl font-semibold my-2">
          Popular {params.explore} Shows
        </h3>
        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-4">
          {data.map((exploreData, index) => {
            return (
              <Card
                data={exploreData}
                key={exploreData.id + "exploreSection"}
                media_type={params.explore}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Explore;
