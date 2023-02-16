import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Leaf from "./components/Leaf";
import leafData from "./leafData";

const createLeaf = (leaf) => {
  return (
    <Leaf
      key={leaf.id}
      title={leaf.title}
      content={leaf.content.substring(0, 60)}
    />
  );
};
function App() {
  return (
    <div className="App">
      <Header />
      {leafData.map(createLeaf)}
      <Footer />
    </div>
  );
}

export default App;
