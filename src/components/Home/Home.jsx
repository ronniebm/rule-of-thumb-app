import BannerTop from "../BannerTop/BannerTop";
import BannerBottom from "../BannerBottom/BannerBottom";

import "./Home.scss";

const Home = () => {

    return (
        <div className="max-centered">
            <BannerTop />
            <main className="list-section" role="main">

                <div className="list-section-top">
                    <span className="list-section-top__title">Previous Rulings</span>
                    <div className="list-section-top__selector">
                        <select name="cars" id="list-view">
                            <option value="volvo">List</option>
                            <option value="saab">Grid</option>
                        </select>
                    </div>
                </div>

                <div className="card-list">
                    <div className="card" >
                    </div>
                </div>
            </main>
            <BannerBottom />
        </div>
    )
}

export default Home;
