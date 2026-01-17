import SplitScream from "./01-splitScream"

function LeftSide() {
  return (
    <div>
      <h2>Left Side Content</h2>
    </div>
  )
}

function RightSide() {
  return (
    <div>
      <h2>right Side Content</h2>
    </div>
  )
}
function App() {

  return (
    <>
      <h3>React avanaçado</h3>
      <SplitScream Left={<LeftSide />} Right={<RightSide />} />
    </>
  )
}

export default App
