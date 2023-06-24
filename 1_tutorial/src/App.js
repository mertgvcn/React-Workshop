import './App.css';
import User from "./components/user";

//?return içinde süslü parantezlere yazılan şeyler Javascript kodudur.
//?html ve javascripti iç içe kullanma durumuna JSX deniliyor.

function App() {
  const x = 4;
  const y = 6;
  const check = true;

  return (
    <div className="container">
      {x+y /*değişkenleri süslü parantezlerle görebiliyoruz */}
    
      <h3 style={{color:"red",fontSize:"20px"}}>App Component</h3>
      <h4 id="login_info">Login Page</h4>
      <User/>
      <User/>
    </div>
  );
}

export default App;
