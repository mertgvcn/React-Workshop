import './App.css';
import User from "./components/user";
import Navbar from "./components/navbar";

//?return içinde süslü parantezlere yazılan şeyler Javascript kodudur.
//?html ve javascripti iç içe kullanma durumuna JSX deniliyor.

function App() {
  const x = 4;
  const y = 6;

  return (
    <div className="container">
      <Navbar title="USER APP NAVBAR" />

      {x + y}
      <h3 style={{ color: "grey", fontSize: "20px" }}>bu şekilde style atabiliriz</h3>

      <h4 id="user_list_title">User List</h4> {/*css dosyasından da style çekebiliriz*/}
      <User
        name="mert"
        department="software"
        salary="10000"
      />
      <User
        name="ali"
        department="design"
        salary="8000"
      />
    </div>
  );
}

export default App;
