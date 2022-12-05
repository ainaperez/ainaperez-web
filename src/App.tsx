import './App.css';
import Header from "./components/Header";
import Section from './components/Section/Section';
import About from './components/Sections/About/About';
import Work from './components/Sections/Work/Work';
import Contact from './components/Sections/Contact/Contact';

function App() {
  return (
    <div className="App">
     <Header />
     <Section title="Hi, I'm Aina!"><About /></Section>
     <Section title="Work"><Work /></Section>
     <Section title="Contact"><Contact /></Section>
    </div>
  );
}

export default App;
