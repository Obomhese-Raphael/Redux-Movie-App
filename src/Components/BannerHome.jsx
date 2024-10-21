/* eslint-disable react/jsx-no-undef */
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useSelector } from "react-redux";

const BannerHome = () => {
  const bannerData = useSelector((state) => state.movieData.bannerData);
  const imageURL = useSelector((state) => state.movieData.imageURL);
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    if (currentImage === bannerData.length - 1) {
      setCurrentImage(0); // Reset to the first image
    } else {
      setCurrentImage((preve) => preve + 1);
    }
  };
  const handlePrevious = () => {
    if (currentImage > 0) {
      setCurrentImage((preve) => preve - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImage < bannerData.length - 1) {
        handleNext();
      } else {
        setCurrentImage(1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [bannerData, imageURL, currentImage]);
  return (
    <section className="w-full h-full">
      <div className="flex min-h-full max-h-[95vh] overflow-hidden">
        {bannerData.map((data, index) => {
          return (
            <div
              key={data.id + "bannerHome" + index}
              className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all"
              style={{
                transform: `translateX(-${currentImage * 100}%)`,
              }}
            >
              <div className="w-full h-full overflow-hidden">
                <img
                  className="h-full object-cover w-full"
                  src={imageURL + data.backdrop_path}
                />
              </div>

              <div className="absolute hidden top-0 h-full w-full items-center justify-between group-hover:lg:flex">
                <button
                  onClick={handlePrevious}
                  className="bg-white p-1 rounded-full text-black text-2xl z-10 mx-2"
                >
                  <FaAngleLeft />
                </button>

                <button
                  onClick={handleNext}
                  className="bg-white p-1 rounded-full text-black text-2xl z-10 mx-2"
                >
                  <FaAngleRight />
                </button>
              </div>

              <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>

              <div className="container mx-auto">
                <div className=" w-full absolute bottom-0 max-w-md px-3">
                  <h2 className="font-bold text-2xl lg:text-4xl drop-shadow-2xl">
                    {data?.title || data?.name}
                  </h2>
                  <p className="text-ellipsis line-clamp-3 my-2">
                    {data.overview}
                  </p>
                  <div className="flex items-center gap-4">
                    <p className="text-sm">
                      Ratings: {Number(data.vote_average).toFixed(1)}+
                    </p>
                    <span> | </span>
                    <p>Views: {Number(data.popularity).toFixed(0)}</p>
                  </div>
                  <Link to={"/"+data?.media_type+"/"+data?.id} className="bg-white px-4 py-2 text-black font-bold rounded mt-4 hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105 ">
                    Play Now
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BannerHome;
