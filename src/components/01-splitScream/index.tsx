import { Container, Panel } from "./index.css";

const SplitScream = ({ Left, Right }) => {
  return (
    <div className={Container}>
      <div className={Panel}>
        {Left}
      </div>
      <div className={Panel}>
        {Right}
      </div>
    </div >
  )
}

export default SplitScream;
