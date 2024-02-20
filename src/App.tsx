import LandingPage from './pages/LandingPage';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <div className="w-screen h-screen bg-background overflow-y-scroll snap-y snap-mandatory">
      <LandingPage className="snap-always snap-start" />
      <AboutMe className="snap-always snap-start" />
    </div>
  );
}

export default App;
