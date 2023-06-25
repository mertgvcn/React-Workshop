import './App.css';
import Navbar from './components/navbar.jsx';
import User from './components/user.jsx';

function App() {
  return (
    <div>
      <Navbar title="USER APP" />
      <User
        name="Mert Güvercin"
        department="Yazılım Mühendisliği"
        salary="15000 TL"
      />
      <User
        name="Ali Güvercin"
        department="İnsan Kaynakları"
        salary="12000 TL"
      />
    </div>
  )
}

export default App;
