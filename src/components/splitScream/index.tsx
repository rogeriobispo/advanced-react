import { Container, Panel } from "./index.css";

const SplitScreen = ({ Left, Right }) => {
  return (
    <div className={Container}>
      <div className={Panel} style={{ backgroundColor: 'red' }}>
        {Left}
      </div>
      <div className={Panel} style={{ backgroundColor: 'yellow' }}>
        {Right}
      </div>
    </div >
  )
}

export default SplitScreen;
