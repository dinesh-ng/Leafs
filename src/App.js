import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Main from "./components/Main";

const isLoggedIn = true;
// const isLoggedIn = false;
const isRegistered = true;
// const isRegistered = false;

function App() {
  return (
    <div className="App">
      <Header />
      {isRegistered ? (
        isLoggedIn ? (
          <Main />
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
