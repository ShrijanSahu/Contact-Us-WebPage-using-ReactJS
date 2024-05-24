import './App.css';
import Navigation from './components/Navigation/Navigation';
import ContactHeader from './components/ContactHeader/ContactHeader';
import ContactForm from './components/ContactForm/ContactForm';
import Button from './components/Button/Button';

export function App() {
  return <div>
    <Navigation />
    <ContactHeader />
    <ContactForm />
    <Button />
  </div>;
}

export default App;