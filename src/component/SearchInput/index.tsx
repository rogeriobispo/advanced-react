import { useState, useEffect } from "react";

const SearchInput = () => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.length > 0) {
      console.log(`Buscando por: "${query}"...`);

      const startTime = performance.now();
      while (performance.now() - startTime < 150) { }
    }
  }, [query]);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", marginTop: "20px" }}>
      <h3>Exemplo de Input sem Debounce</h3>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Digite rápido para sentir o lag..."
        style={{ padding: "8px", width: "300px" }}
      />
    </div>
  );
};

export default SearchInput;
