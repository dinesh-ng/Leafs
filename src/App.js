import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Leaf from "./components/Leaf";
import leafData from "./leafData";
import Form from "./components/Form";
const createLeaf = (leaf) => {
  return (
    <Leaf
      key={leaf.id}
      title={leaf.title}
      content={leaf.content.substring(0, 60)}
    />
  );
};
const isLoggedIn = false;
const isRegistered = true;
function App() {
  return (
    <div className="App">
      <Header />
      {isRegistered ? (
        isLoggedIn ? (
          leafData.map(createLeaf)
        ) : (
          <Form isRegistered={isRegistered} />
        )
      ) : (
        <Form isRegistered={isRegistered} />
      )}
      <Footer />
    </div>
  );
}

export default App;
