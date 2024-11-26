import "../styles/globals.css"; // Estilos globales
import Header from "../components/main/Header"; // Ruta al Header

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
