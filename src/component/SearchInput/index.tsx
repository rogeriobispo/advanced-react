import { useState, useEffect } from "react";

const SearchInput = () => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) return;

    const timer = setTimeout(() => {
      console.log(`Buscando por: "${query}"... (Processamento após delay)`);

      const startTime = performance.now();
      while (performance.now() - startTime < 150) { }
    }, 500);

    return () => {
      console.log('limpeza do timer anterior');
      clearTimeout(timer);
    }
  }, [query]);

  useEffect(() => {
    console.log("App montado");

    return () => {
      console.log("App desmontado");
    }
  }, []);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", marginTop: "20px" }}>
      <h3>Exemplo de Input com Debounce</h3>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Digite rápido... o debounce vai agir!"
        style={{ padding: "8px", width: "300px" }}
      />
      <p>Status: {query ? "Aguardando pausa..." : "Aguardando input..."}</p>
    </div>
  );
};

export default SearchInput;
