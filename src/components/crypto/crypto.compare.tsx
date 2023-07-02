import { useContext } from "react";
import { ComparisonContext } from "../../context";

const CryptoCompare = () => {
  const { comparisonList, removeFromComparison } =
    useContext(ComparisonContext);

  return (
    <div>
      <h2>Comparaison de Cryptomonnaies</h2>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Symbole</th>
            <th>Rank</th>
            <th>Market Cap</th>
            <th>Volume 24h</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {comparisonList.map((crypto) => (
            <tr key={crypto.id}>
              <td>{crypto.name}</td>
              <td>{crypto.symbol}</td>
              <td>{crypto.rank}</td>
              <td>{crypto.quotes.USD.market_cap}</td>
              <td>{crypto.quotes.USD.volume_24h}</td>
              <td>
                <button onClick={() => removeFromComparison(crypto.id)}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoCompare;
