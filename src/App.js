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
  "El único límite eres tú mismo.",
  "Haz de cada día tu obra maestra.",
  "La constancia es la clave del éxito.",
  "No esperes, el tiempo nunca será justo.",
  "El fracaso es solo el camino hacia el éxito.",
  "La motivación te impulsa, el hábito te sostiene.",
  "Persigue tus sueños con determinación.",
  "Lo que no te mata te hace más fuerte.",
  "Cambia tus pensamientos y cambiarás tu mundo.",
  "No pares hasta sentirte orgulloso.",
  "Aprende de ayer, vive hoy, espera mañana.",
  "La disciplina es el puente entre metas y logros.",
  "Cada paso cuenta, sigue avanzando.",
  "El esfuerzo de hoy es el éxito de mañana.",
  "Sueña, cree, logra.",
  "Tú puedes con más de lo que imaginas.",
  "Transforma tus debilidades en fortalezas.",
  "No cuentes los días, haz que los días cuenten.",
  "Hazlo con pasión o no lo hagas.",
  "Los grandes cambios requieren tiempo y paciencia.",
  "El éxito es para los que se atreven a actuar.",
  "Mantén la mente positiva y todo será posible.",
  "Desafía tus límites, rompe barreras.",
  "Confía en el proceso.",
  "Cada logro empieza con la decisión de intentarlo.",
  "Nunca es tarde para reinventarte.",
  "La grandeza comienza con pequeños pasos.",
  "Haz que cada momento valga la pena.",
  "El verdadero poder está en tu mente.",
  "Sé la energía que quieres atraer.",
  "No busques el momento perfecto, haz el momento perfecto.",
  "Lo imposible solo tarda un poco más.",
  "Vive con propósito y pasión.",
  "El cambio comienza dentro de ti.",
  "Haz que te importe más tu progreso que tu perfección.",
  "No te compares, solo compite contigo mismo.",
  "La perseverancia vence al talento.",
  "La paciencia es amarga, pero su fruto es dulce.",
  "Cree en la magia de los nuevos comienzos.",
  "Lo que sueñas hoy, será tu realidad mañana.",
  "Tú eres el arquitecto de tu destino.",
  "Nunca dejes de aprender y crecer.",
  "Haz de tu vida una obra de arte.",
  "El coraje no siempre ruge, a veces es la voz tranquila.",
  "Vence el miedo con acción.",
  "Las oportunidades no pasan, las creas.",
  "Los límites solo están en tu mente.",
  "Cada día es una página en blanco, escribe bien tu historia.",
  "Nunca subestimes el poder de la dedicación.",
  "La clave está en empezar.",
  "Si quieres resultados distintos, haz cosas distintas.",
  "No sueñes tu vida, vive tu sueño.",
  "Sé fuerte, sé valiente, sé tú.",
  "Los obstáculos son para saltarlos, no para detenerte.",
  "El éxito no es suerte, es esfuerzo.",
  "Aprende a bailar bajo la lluvia.",
  "Lo que haces hoy puede mejorar todos tus mañanas.",
  "Haz que tu pasión sea tu propósito.",
  "El tiempo es ahora.",
  "Persiste y triunfarás.",
  "El esfuerzo constante vence al talento innato.",
  "Rodéate de personas que te impulsen a crecer.",
  "La actitud es la diferencia entre un día bueno y uno grandioso.",
  "Nunca pierdas la esperanza.",
  "Sigue el camino que te haga feliz.",
  "El miedo es temporal, el arrepentimiento es para siempre.",
  "No te detengas hasta que estés orgulloso.",
  "El cambio es la única constante.",
  "Cada pequeño paso suma.",
  "El poder de la mente es infinito.",
  "Levántate una vez más de las que caes.",
  "Construye tu futuro con acciones de hoy.",
  "Confía en ti, confía en el proceso.",
  "La excelencia no es un acto, es un hábito.",
  "Hazlo con amor o no lo hagas.",
  "Nunca dejes que te roben tus sueños.",
  "Cada día es una nueva oportunidad para ser mejor.",
  "La pasión es el combustible del éxito.",
  "El único lugar donde el éxito viene antes que el trabajo es en el diccionario.",
  "No sueñes con el éxito, trabaja para conseguirlo.",
  "El poder está en tus manos.",
  "Aprovecha el presente para construir tu futuro.",
  "La felicidad no es algo hecho, viene de tus propias acciones.",
  "Los sueños grandes requieren esfuerzo constante.",
  "Nunca es demasiado tarde para empezar.",
  "Tú eres más fuerte de lo que crees.",
  "Conviértete en la persona que quieres ser.",
];

const fondos = [
  "linear-gradient(to right, #fbc2eb, #a6c1ee)",
  "linear-gradient(to right, #ffecd2, #fcb69f)",
  "linear-gradient(to right, #c2e9fb, #a1c4fd)",
  "linear-gradient(to right, #fdfbfb, #ebedee)",
  "linear-gradient(to right, #e0c3fc, #8ec5fc)",
  "linear-gradient(to right, #d4fc79, #96e6a1)",
  "linear-gradient(to right, #f6d365, #fda085)",
  "linear-gradient(to right, #ff9a9e, #fad0c4)",
  "linear-gradient(to right, #a18cd1, #fbc2eb)",
  "linear-gradient(to right, #fbc7aa, #cfd9df)",
  "linear-gradient(to right, #a1c4fd, #c2e9fb)",
  "linear-gradient(to right, #e0c3fc, #8ec5fc)",
  "linear-gradient(to right, #d9a7c7, #fffcdc)",
  "linear-gradient(to right, #a6c0fe, #f68084)",
  "linear-gradient(to right, #b7f8db, #50a7c2)",
  "linear-gradient(to right, #96fbc4, #f9f586)",
  "linear-gradient(to right, #c6ffdd, #fbd786)",
  "linear-gradient(to right, #84fab0, #8fd3f4)",
  "linear-gradient(to right, #fccb90, #d57eeb)",
  "linear-gradient(to right, #d9a7c7, #fffcdc)",
  "linear-gradient(to right, #ee9ca7, #ffdde1)",
  "linear-gradient(to right, #ffecd2, #fcb69f)",
  "linear-gradient(to right, #fcb69f, #ffdde1)",
  "linear-gradient(to right, #fceabb, #f8b500)",
  "linear-gradient(to right, #fad0c4, #ffd1ff)",
  "linear-gradient(to right, #e0c3fc, #8ec5fc)",
  "linear-gradient(to right, #a1c4fd, #c2e9fb)",
  "linear-gradient(to right, #fbc2eb, #a6c1ee)",
  "linear-gradient(to right, #ff9a9e, #fad0c4)",
  "linear-gradient(to right, #b7f8db, #50a7c2)",
  "linear-gradient(to right, #d4fc79, #96e6a1)",
  "linear-gradient(to right, #f6d365, #fda085)",
  "linear-gradient(to right, #fccb90, #d57eeb)",
  "linear-gradient(to right, #c6ffdd, #fbd786)",
  "linear-gradient(to right, #84fab0, #8fd3f4)",
  "linear-gradient(to right, #d9a7c7, #fffcdc)",
  "linear-gradient(to right, #ee9ca7, #ffdde1)",
  "linear-gradient(to right, #ffecd2, #fcb69f)",
  "linear-gradient(to right, #fcb69f, #ffdde1)",
  "linear-gradient(to right, #fceabb, #f8b500)",
  "linear-gradient(to right, #fad0c4, #ffd1ff)",
  "linear-gradient(to right, #e0c3fc, #8ec5fc)",
  "linear-gradient(to right, #a1c4fd, #c2e9fb)",
  "linear-gradient(to right, #fbc2eb, #a6c1ee)",
  "linear-gradient(to right, #ff9a9e, #fad0c4)",
  "linear-gradient(to right, #b7f8db, #50a7c2)",
  "linear-gradient(to right, #d4fc79, #96e6a1)",
  "linear-gradient(to right, #f6d365, #fda085)",
  "linear-gradient(to right, #fccb90, #d57eeb)",
  "linear-gradient(to right, #c6ffdd, #fbd786)",
  "linear-gradient(to right, #84fab0, #8fd3f4)",
  "linear-gradient(to right, #d9a7c7, #fffcdc)",
  "linear-gradient(to right, #ee9ca7, #ffdde1)",
  "linear-gradient(to right, #ffecd2, #fcb69f)",
  "linear-gradient(to right, #fcb69f, #ffdde1)",
  "linear-gradient(to right, #fceabb, #f8b500)",
  "linear-gradient(to right, #fad0c4, #ffd1ff)",
  "linear-gradient(to right, #e0c3fc, #8ec5fc)",
  "linear-gradient(to right, #a1c4fd, #c2e9fb)",
  "linear-gradient(to right, #fbc2eb, #a6c1ee)",
  "linear-gradient(to right, #ff9a9e, #fad0c4)",
  "linear-gradient(to right, #b7f8db, #50a7c2)",
  "linear-gradient(to right, #d4fc79, #96e6a1)",
  "linear-gradient(to right, #f6d365, #fda085)",
  "linear-gradient(to right, #fccb90, #d57eeb)",
  "linear-gradient(to right, #c6ffdd, #fbd786)",
  "linear-gradient(to right, #84fab0, #8fd3f4)",
  "linear-gradient(to right, #d9a7c7, #fffcdc)",
  "linear-gradient(to right, #ee9ca7, #ffdde1)",
  "linear-gradient(to right, #ffecd2, #fcb69f)",
  "linear-gradient(to right, #fcb69f, #ffdde1)",
  "linear-gradient(to right, #fceabb, #f8b500)",
  "linear-gradient(to right, #fad0c4, #ffd1ff)",
  "linear-gradient(to right, #e0c3fc, #8ec5fc)",
  "linear-gradient(to right, #a1c4fd, #c2e9fb)",
  "linear-gradient(to right, #fbc2eb, #a6c1ee)",
];

function App() {
  const [frase, setFrase] = useState(""); // frase actual que se muestra
  const [contador, setContador] = useState(0); // contador cuantas frases se generan
  const [fondo, setFondo] = useState(fondos[0]); // fondo actual

  // funcion que genera frase y fondo aleatorio
  const generarFrase = () => {
    const aleatoria = frases[Math.floor(Math.random() * frases.length)]; // selecciona una frase aleatoria del array
    let nuevoFondo;
    do {
      nuevoFondo = fondos[Math.floor(Math.random() * fondos.length)]; // seleciona un fondo aleatorio del array
    } while (nuevoFondo === fondo); // evita que se repita el mismo fondo

    setFrase(aleatoria); // actualiza el estado con la frase y fondo nuevos
    setContador(prev => prev + 1); // incrementa el contador de frases vistas
    setFondo(nuevoFondo);
  };

  return (
    // div principal con fondo dinámico según el estado fondo
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