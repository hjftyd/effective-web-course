import styles from './Search.module.scss';

export const Search: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>Characters (1562)</div>
      <input
        //   ref={inputEl}
        className={styles.input}
        placeholder="Search for Characters by Name"
        //   value={value}
        //   onChange={onChangeInput}
      />
    </div>
  );
};
