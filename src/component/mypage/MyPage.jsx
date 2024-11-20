import Header from "../Header";
import Footer from "../Footer";
import "./MyPage.css";
export default function MyPage() {
  return (
    <div>
      <Header />
      <iframe src="map.html" title="Tmap Map" allowfullscreen></iframe>
      <Footer />
    </div>
  );
}
