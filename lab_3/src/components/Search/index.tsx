import styles from './Search.module.scss';

export const Search: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} placeholder="Search for Characters by Name" />
      <button type="button" className={styles.button}>
        search
      </button>
      <div className={styles.border}></div>
    </div>
  );
};
