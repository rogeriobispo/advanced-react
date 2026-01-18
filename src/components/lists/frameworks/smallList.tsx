
import { card, label, row } from "./smallListItems.css";

const SmallInfoListFrameworks = ({ framework }) => {
  const { name, yearCreated } = framework;
  return (
    <div className={card}>
      <div className={row}>
        <div>
          <span className={label}>Framework:</span>
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

export default SmallInfoListFrameworks;
