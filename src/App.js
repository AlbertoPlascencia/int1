import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search-design" element={<SearchDesign />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

// Navbar component
function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/register">Registro</Link></li>
        <li><Link to="/login">Inicio de sesión</Link></li>
        <li><Link to="/search-design">Buscar Diseño</Link></li>
        <li><Link to="/book-appointment">Reservar Cita</Link></li>
        <li><Link to="/profile">Perfil</Link></li>
      </ul>
    </nav>
  );
}

// Home component
function Home() {
  return (
    <div>
      <h1>Bienvenida al Salón de Uñas</h1>
      <p>Descubre diseños personalizados y agenda una cita con nuestras profesionales.</p>
    </div>
  );
}

// Register component
function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Usuario registrado:", form);
  };

  return (
    <div>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nombre" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Correo Electrónico" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

// Login component
function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inicio de sesión:", form);
  };

  return (
    <div>
      <h2>Inicio de Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Correo Electrónico" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

// SearchDesign component
function SearchDesign() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Búsqueda de diseño:", search);
  };

  return (
    <div>
      <h2>Búsqueda de Diseño Deseado</h2>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Buscar diseño" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
}

// BookAppointment component
function BookAppointment() {
  const [appointment, setAppointment] = useState({ date: "", time: "" });

  const handleChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cita reservada:", appointment);
  };

  return (
    <div>
      <h2>Reservar Cita</h2>
      <form onSubmit={handleSubmit}>
        <input type="date" name="date" onChange={handleChange} required />
        <input type="time" name="time" onChange={handleChange} required />
        <button type="submit">Reservar</button>
      </form>
    </div>
  );
}

// Profile component
function Profile() {
  return (
    <div>
      <h2>Perfil de la Profesional</h2>
      <p>Información de la profesional: experiencia, especialidades y fotos de trabajos anteriores.</p>
    </div>
  );
}

export default App;
