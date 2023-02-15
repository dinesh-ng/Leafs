import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Leaf from "./components/Leaf";
import leafData from "./leafData";
function App() {
  return (
    <div className="App">
      <Header />
      <Leaf {...leafData[0]} />
      <Leaf {...leafData[1]} />
      <Leaf {...leafData[2]} />
      {/* {leafData.map((leaf) => (
        <Leaf title={leaf.title} content={leaf.content} />
      ))} */}
      <Footer />
    </div>
  );
}

export default App;
