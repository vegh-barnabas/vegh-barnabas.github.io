import 'animate.css';

import Article from 'components/article/Article';

import styles from './Articles.module.scss';

export default function Articles() {
  return (
    <>
      <div className="content animate__animated animate__fadeIn">
        <div className={styles.articleGrid}>
          <Article
            image="https://images.unsplash.com/photo-1749422222131-4110cd1faceb?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            header="How to write good code in JavaScript"
            contentPreview="Ever wondered how to write good code in Javascript? In this article..."
          />
          <Article
            image="https://images.unsplash.com/photo-1749422222131-4110cd1faceb?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            header="How to write good code in JavaScript"
            contentPreview="Ever wondered how to write good code in Javascript? In this article..."
          />
          <Article
            image="https://images.unsplash.com/photo-1749422222131-4110cd1faceb?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            header="How to write good code in JavaScript"
            contentPreview="Ever wondered how to write good code in Javascript? In this article..."
          />
        </div>
      </div>
    </>
  );
}
