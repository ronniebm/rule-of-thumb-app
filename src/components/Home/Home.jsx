import BannerTop from "../BannerTop/BannerTop";
import BannerBottom from "../BannerBottom/BannerBottom";

const Home = () => {
    return (
        <div class="max-centered">
            <BannerTop />
            <h2 className="home">home component</h2>
            <BannerBottom />
        </div>
    )
}

export default Home;
