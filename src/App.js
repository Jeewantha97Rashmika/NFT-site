import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { light } from "./styles/Theme";


import Navigation from "./components/Navigation";
import Home from './components/section/Home'
import About from './components/section/About'
import Roadmap from './components/section/Roadmap'
import Showcase from './components/section/Showcase'
import Team from './components/section/Team'
import Faq from './components/section/Faq'
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        <Roadmap />
        <Showcase />
        <Team />
        <Faq />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
