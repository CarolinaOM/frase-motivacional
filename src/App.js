import { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

const frases = [
  "Cree en ti y todo será posible.",
  "Cada día es una nueva oportunidad.",
  "El éxito es la suma de pequeños esfuerzos repetidos cada día.",
  "Sigue adelante, lo mejor está por venir.",
  "No te rindas, lo bueno lleva tiempo.",
  "Hoy es un buen día para empezar de nuevo.",
  "Tu actitud determina tu altitud.",
];

const fondos = [
  "linear-gradient(to right, #fbc2eb, #a6c1ee)",
  "linear-gradient(to right, #ffecd2, #fcb69f)",
  "linear-gradient(to right, #c2e9fb, #a1c4fd)",
  "linear-gradient(to right, #fdfbfb, #ebedee)",
  "linear-gradient(to right, #e0c3fc, #8ec5fc)",
  "linear-gradient(to right, #d4fc79, #96e6a1)",
  "linear-gradient(to right, #f6d365, #fda085)",
];

function App() {
  const [frase, setFrase] = useState("");
  const [contador, setContador] = useState(0);
  const [fondo, setFondo] = useState(fondos[0]);

  const generarFrase = () => {
    const aleatoria = frases[Math.floor(Math.random() * frases.length)];
    let nuevoFondo;
    do {
      nuevoFondo = fondos[Math.floor(Math.random() * fondos.length)];
    } while (nuevoFondo === fondo); // evita que se repita el mismo fondo

    setFrase(aleatoria);
    setContador(prev => prev + 1);
    setFondo(nuevoFondo);
  };

  return (
    <div className="App" style={{ background: fondo }}>
      <h1>🌟 Frase Motivacional 🌟</h1>
      <button onClick={generarFrase}>Generar frase</button>

      <motion.p
        key={frase}
        animate={{ scale: 1.2 }}
        initial={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        {frase}
      </motion.p>

      <small>Frases vistas: {contador}</small>
    </div>
  );
}

export default App;