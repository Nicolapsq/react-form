import { useState } from "react";

export default function List() {
  const [listaArticoli, setListaArticoli] = useState([
    { id: 1, titolo: "articolo-1" },
    { id: 2, titolo: "articolo-2" },
    { id: 3, titolo: "articolo-3" },
    { id: 4, titolo: "articolo-4" },
    { id: 5, titolo: "articolo-5" },
  ]);
  const [nuovoArticolo, setNuovoArticolo] = useState("");

  const aggiungiArticolo = (e) => {
    e.preventDefault();

    if (nuovoArticolo.trim() !== "") {
      const nuovoId = listaArticoli[listaArticoli.length - 1].id + 1;

        const articolo = {
        id: nuovoId,
        titolo: nuovoArticolo
      };

      const nuovaListaArticoli = [...listaArticoli, articolo];
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
          {listaArticoli.map((articolo,) => (
            <li key={articolo.id} className="list-item">
              {articolo.titolo}
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
