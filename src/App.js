import "./styles.css";
import Navigation from "./Navigation";
import Hero from "./Hero";
import "bootstrap/dist/css/bootstrap.css";

// Put any other imports below so that CSS from your
// components takes precedence over default styles.
export default function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Hero />
      </main>
    </div>
  );
}
