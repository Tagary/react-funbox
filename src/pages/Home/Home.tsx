import React from 'react';
import Product from '../../components/Product';
import styles from './Home.module.scss';

const Home = () => {
  const products = [
    {
      id: 1,
      flavor: 'фуа-гра',
      serving: 10,
      mouseCount: null,
      mouse: 'мышь в подарок',
      weight: '0.5',
      disable: false,
      footer: 'Печень утки разварная с артишоками.',
    },
    {
      id: 2,
      flavor: 'рыбой',
      serving: 40,
      mouseCount: 2,
      mouse: 'мыши в подарок',
      weight: '2',
      disable: false,
      footer: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    },
    {
      id: 3,
      flavor: 'курой',
      serving: 100,
      mouseCount: 5,
      mouse: 'мышей в подарок заказчик доволен',
      weight: '5',
      disable: false,
      footer: 'Филе из цыплят с трюфелями в бульоне.',
    },
  ];
  return (
    <div className={styles.products}>
      <h1 className={styles.products__title}>Ты сегодня покормил кота?</h1>
      <div className={styles.product__cards}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
