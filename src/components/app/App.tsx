import React, { useEffect, useState } from "react";
import Styles from "./App.module.css";
import { CryptoService } from "../../services";
import { CryptoDTO } from "../../dto";
import PostCell from "../crypto/crypto.cell";

function App() {
  const [cryptos, setCryptos] = useState<CryptoDTO[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCryptos = async () => {
      const apiCryptos = await CryptoService.getCryptos();
      setCryptos(apiCryptos);
    };
    fetchCryptos().catch(console.error);
  }, []);

  const filteredCryptos = cryptos.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={Styles.App}>
      <header className={Styles.AppHeader}>
        <input
          type="text"
          placeholder="Rechercher par nom..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {!cryptos.length && <p>Chargement des données en cours...</p>}

        {filteredCryptos.map((crypto) => (
          <PostCell post={crypto} key={crypto.id} />
        ))}
      </header>
    </div>
  );
}

export default App;
