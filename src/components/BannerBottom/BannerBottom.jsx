import "./BannerBottom.scss";
import bgPeople from '../../assets/img/bg-people.png';

const BannerBottom = () => {
    return (
        <section data-testid="banner-bottom-1">
            <aside className="banner banner-bottom" role="doc-tip" aria-label="Submit a name" >
                <img
                    className="banner__background"
                    src={ bgPeople }
                    alt=""
                    role="none"
                />
                <div className="banner__left">
                    <h2 className="banner__heading">Is there anyone else you would want us to add?</h2>
                </div>
                <div className="banner__right">
                    <button className="banner__cta" data-testid="banner-bottom-btn-submit">
                        Submit a name
                    </button>
                </div>
            </aside>
            <hr className="banner__separator"/>
        </section>
    );
}

export default BannerBottom;
