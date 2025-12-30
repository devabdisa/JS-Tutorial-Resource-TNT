import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <h1 className="page-title">Welcome to Functional Components</h1>
        <p className="subtitle">Learn how to break this UI into reusable pieces.</p>
        
        <div className="cards-grid">
           <Card />
           <Card />
           <Card />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
