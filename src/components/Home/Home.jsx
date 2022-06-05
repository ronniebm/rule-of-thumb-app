import { useState, useEffect } from 'react';
import BannerTop from '../BannerTop/BannerTop';
import BannerBottom from '../BannerBottom/BannerBottom';
import CardGrid from './CardGrid/CardGrid';
import CardList from './CardList/CardList';
import axios from 'axios';

// useWindowDimensions: a manual created hook.
import { useWindowDimensions } from '../../assets/helpers';

import './Home.scss';
import { getCharacters, api } from '../../api/axios';

const Home = () => {
  const [gridView, setGridView] = useState(false);
  const [characters, setCharacters] = useState([]);
  const { width } = useWindowDimensions();

  const url = 'http://localhost:3001/data';
  useEffect(() => {
    const consultaAPI = async () => {
      const consulta = await axios({ url });
      setCharacters(consulta.data);
    };
    consultaAPI();
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
    <div className='max-centered'>
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
    </div>
  );
};

export default Home;
