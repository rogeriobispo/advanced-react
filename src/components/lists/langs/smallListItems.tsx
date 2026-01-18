import { card, label, row } from "./smallListItems.css";

const SmallInfoListLangs = ({ linguagem }: { item }) => {
  const { name, yearCreated } = linguagem;
  return (
    <div className={card}>
      <div className={row}>
        <div>
          <span className={label}>Linguagem:</span>
          <span>{name}</span>
        </div>
        <div>
          <span className={label}>Ano criação:</span>
          <span>{yearCreated}</span>
        </div>
      </div>
    </div>
  );
};

export default SmallInfoListLangs;
