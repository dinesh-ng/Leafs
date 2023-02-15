import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Leaf from "./components/Leaf";
import leafData from "./leafData";

function App() {
  return (
    <div className="App">
      <Header />
      {leafData.map((leaf) => (
        <Leaf key={leaf.id} title={leaf.title} content={leaf.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
