import { useState } from "react";

export default function List() {
  const [listaArticoli, setListaArticoli] = useState([
    "articolo-1",
    "articolo-2",
    "articolo-3",
    "articolo-4",
    "articolo-5",
  ]);
  const [nuovoArticolo, setNuovoArticolo] = useState("");

  const aggiungiArticolo = (e) => {
    e.preventDefault();

    if (nuovoArticolo !== "") {
        const nuovaListaArticoli = [...listaArticoli, nuovoArticolo];
        setListaArticoli(nuovaListaArticoli);
        console.table(nuovaListaArticoli);
        setNuovoArticolo("");
    }
  };

  return (
    <main>
      <div className="container">
        <h1>Lista Articoli</h1>
        <ul className="list">
          {listaArticoli.map((articolo, index) => (
            <li key={index} className="list-item">
              {articolo}
            </li>
          ))}
        </ul>
        <form onSubmit={aggiungiArticolo}>
          <div className="mb-3">
            <label className="form-label">Articoli</label>
            <input
              value={nuovoArticolo}
              onChange={(e) => setNuovoArticolo(e.target.value)}
              className="form-control"
              type="text"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Aggiungi Articolo
          </button>
        </form>
      </div>
    </main>
  );
}
