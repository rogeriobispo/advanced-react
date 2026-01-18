import { Container, Panel } from "./index.css";

const SplitScreen = ({ children, rightWidth = 1, LeftWidth = 1 }) => {
  const [Left, Right] = children;
  return (
    <div className={Container}>
      <div className={Panel} style={{ flex: LeftWidth, backgroundColor: 'red' }}>
        {Left}
      </div>
      <div className={Panel} style={{ flex: rightWidth, backgroundColor: 'yellow' }}>
        {Right}
      </div>
    </div >
  )
}

export default SplitScreen;
