import { useState, useEffect } from 'react';
import './Home.scss';
import BannerTop from '../../components/BannerTop/BannerTop';
import BannerBottom from '../../components/BannerBottom/BannerBottom';
import CardGrid from '../../components/CardGrid/CardGrid';
import CardList from '../../components/CardList/CardList';
import { getCharacters } from '../../api/axios';

// useWindowDimensions: a manual created hook.
import { useWindowDimensions } from '../../assets/helpers';

const Home = () => {
  const [gridView, setGridView] = useState(false);
  const [characters, setCharacters] = useState([]);
  const { width } = useWindowDimensions();

  useEffect(() => {
    getCharacters(setCharacters)
  }, []);

  const handleChange = (e) => {
    setGridView(e.target.value === 'grid');
  };

  const showView = (data) => {
    return ( (width < 768) || gridView )
        ? <CardGrid data={ data } key={ data.id } width={ width } />
        : <CardList data={ data } key={ data.id } />;
  };

  const classView = (gridView) =>
    width < 768 || gridView ? 'card-grid' : 'card-list';

  return (
    <section className='home max-centered' data-testid="home-1">
      <BannerTop />
      <main className='list-section' role='main'>
        <section className='list-section-top'>
          <span className='list-section-top__title'>Previous Rulings</span>
          <div>
            <select
              className='list-section-top__selector'
              name='views'
              id='list-view'
              onChange={handleChange}
              style={width <= 500 ? { display: 'none' } : null}
            >
              <option value='list'>List</option>
              <option value='grid'>Grid</option>
            </select>
          </div>
        </section>

        <section className={classView(gridView)}>
          { characters.map(( data ) => showView( data ))}
        </section>
      </main>
      <BannerBottom />
    </section>
  );
};

export default Home;
