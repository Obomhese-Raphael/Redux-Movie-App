import { useSelector } from "react-redux";
import BannerHome from "../Components/BannerHome";
import HorizontalScrollCard from "../Components/HorizontalScrollCard";
import useFetch from "../Hooks/useFetch";

const Home = () => {
  const trendingData = useSelector((state) => state.movieData.bannerData);
  const { data: nowPlayingData } = useFetch("/movie/now_playing");
  const { data: topRatedData } = useFetch("/movie/top_rated");
  const { data: topPopularSeries } = useFetch("/tv/popular");
  const { data: topUpComing } = useFetch("/movie/upcoming");

  return (
    <div>
      <BannerHome />
      <HorizontalScrollCard
        data={trendingData}
        heading={"Trending"}
        trending={true}
      />
      <HorizontalScrollCard
        data={nowPlayingData}
        heading={"Now Playing"}
        media_type={"movie"}
      />
      <HorizontalScrollCard
        data={topRatedData}
        heading={"Top Rated"}
        media_type={"movie"}
      />
      <HorizontalScrollCard
        data={topPopularSeries}
        heading={"Top Popular TV Shows"}
        trending={false}
        media_type={"tv"}
      />
      <HorizontalScrollCard
        data={topUpComing}
        heading={"Upcoming"}
        trending={false}
        media_type={"tv"}
      />
    </div>
  );
};

export default Home;
