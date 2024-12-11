// import "@/styles/globals.css";
import '../comps/navbar/navbar.css'; // Adjust the path as needed
import '../comps/footer/footer.css';
import '../comps/heroSection/herosection.css';
import '../comps/weatherDetails/weatherDetails.css';
import '../comps/serviceOverview/service.css';
import '../pages/about.css';
import '../pages/contact.css';
import '../pages/services.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
