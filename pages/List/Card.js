import styles from './Link.module.scss';

const List = () => {
  const images = [1, 2, 3];

  return (
    <div>
      <div className={styles.container}>
        {images.map((image) => {
          return (
            <div className={styles.card} key={image}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div className={styles.imgBox}>
                <img src={`/images/${image}.jpg`} />
                {/* <Image src={`/images/${image}.jpg`} layout='fill' /> */}
              </div>
              <div className={styles.content}>
                <h2>Harmoe</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  eos quibusdam quam debitis. Saepe in ipsam, distinctio eos eum
                  tenetur alias dolorum
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
