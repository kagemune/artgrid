import { useEffect, useState } from "react";
import Grid from "./components/Grid";
import "./App.css";
import styled from "styled-components";

// Definimos una interfaz para tener autocompletado y evitar errores de tipo
interface CardData {
  key: string;
  fecha: string;
  descripcion: string;
  url: string;
}
const FooterContainer = styled.footer`
  margin-top: 20px;
  padding: 10px;
  background-color: #110e1f;
  text-align: center;
  border-radius: 8px;
`;

function App() {
  // 1. Inicializamos como array vacío para evitar el primer log 'null'
  const [data, setData] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_URL = "https://script.google.com/macros/s/AKfycbyugoD0xlKUZtLBHjWg3tfvtg1j9sWoT3PBtb3Obn7oJ0yxHgceOFYDuFLu5iskb4iK/exec"; // Asegúrate de usar la URL de la ÚLTIMA implementación

    fetch(API_URL, {
      method: "GET",
      // mode: "no-cors" <-- ¡NUNCA USES ESTO! Te devolverá una respuesta opaca (vacía)
      redirect: "follow",
    })
      .then((response) => {
        if (!response.ok) throw new Error("Error en la red");
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // 2. Transformamos los datos solo si existen
  const formattedCards = data.map((card) => ({
    key: card.key,
    date: card.fecha,
    description: card.descripcion,
    imageUrl: card.url
  }));



  return (
    <>
    <div className="App">
      <h1>ArtGrid</h1>
      <p>Welcome to ArtGrid, your source for high-quality stock footage and images.</p>
      <br />
      {loading ? (
        <p>Cargando galería...</p>
      ) : (
        <Grid cards={formattedCards} />
      )}
    </div>
    <FooterContainer>
        <p>&trade; 2026 kagemuneyd. All rights reserved.</p>
    </FooterContainer>
    </>
  );
}

export default App;