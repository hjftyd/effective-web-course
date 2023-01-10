import React from 'react';
import { Card } from '../../components/card';
import { Search } from '../../components/Search';
import { characters } from '../../mocks';
import styles from '../pages.module.scss';

export const Characters: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.text}>Characters</h1>
      <Search />
      <div className={styles.objectContainer}>
        {characters.map((obj) => {
          return <Card key={obj.id} id={obj.id} name={obj.name} disc={obj.disc} img={obj.img} />;
        })}
      </div>
    </div>
  );
};
