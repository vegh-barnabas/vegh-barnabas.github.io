import styles from 'components/article/Article.module.scss';

type ArticleProps = {
  image: string;
  header: string;
  contentPreview: string;
};

export default function Article({
  image,
  header,
  contentPreview,
}: ArticleProps) {
  return (
    <div className={styles.box}>
      <img src={image} alt="" className={styles.image} />
      <div className={styles.header}>{header}</div>
      <div className={styles.contentPreview}>{contentPreview}</div>
    </div>
  );
}
