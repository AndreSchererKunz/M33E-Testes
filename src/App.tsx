import Post from "./components/Post";
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhttp2.mlstatic.com%2FD_NQ_NP_983750-MLU70918742639_082023-O.webp&f=1&nofb=1&ipt=b54bbba6e6d6ab56a1a7c31ca621b66b335f9b81403c5061aec43adc6ce3edcf&ipo=images">
      Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
