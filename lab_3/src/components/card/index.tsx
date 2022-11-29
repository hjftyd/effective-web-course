import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './card.module.scss';

type CardProps = {
  id: number;
  name: string;
  disc: string;
  img: string;
};

export const Card: React.FC<CardProps> = memo(({ id, name, disc, img }) => {
  return (
    <div className={styles.cardContainer}>
      <NavLink to={String(id)} className={styles.imgContainer}>
        <img className={styles.img} src={img} alt="" />
      </NavLink>
      <NavLink to={String(id)} className={styles.name}>
        {name}
      </NavLink>
      <p className={styles.disc}>{disc}</p>
    </div>
  );
});
