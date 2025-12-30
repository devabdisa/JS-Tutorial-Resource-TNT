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
           <Card 
             title="Component Basics" 
             description="Functional components are Javascript functions that return JSX." 
             colorParam="gradient-1"
           />
            <Card 
             title="Reusability" 
             description="Write code once and use it multiple times across your app." 
             colorParam="gradient-2"
           />
            <Card 
             title="Clean Code" 
             description="Separate concerns by organizing layout into small parts." 
             colorParam="gradient-3"
           />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
