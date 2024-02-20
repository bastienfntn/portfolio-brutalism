import LandingPage from "./pages/LandingPage.tsx";
import AboutMe from "./pages/AboutMe.tsx";

function App() {
  return (
    <div className="flex flex-col w-screen h-full bg-background overflow-y-auto">
      <LandingPage />
      <AboutMe />
    </div>
  );
}

export default App;
