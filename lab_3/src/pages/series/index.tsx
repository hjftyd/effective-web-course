import { series } from '../../mocks';
import React from 'react';
import { Card } from '../../components/card';
import { Search } from '../../components/Search';
import styles from '../pages.module.scss';

export const Series: React.FC = () => {
  return (
    <div>
      <h1 className={styles.text}>Series</h1>
      <Search />
      <div className={styles.objectContainer}>
        {series.map((obj) => {
          return <Card key={obj.id} id={obj.id} name={obj.name} disc={obj.disc} img={obj.img} />;
        })}
      </div>
    </div>
  );
};
