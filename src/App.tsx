import SplitScreen from "./components/splitScream"

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
      <SplitScreen Left={<LeftSide />} Right={<RightSide />} />
      <h4>Devisão left menor que right</h4>
      <SplitScreen Left={<LeftSide />} LeftWidth={1} Right={<RightSide />} rightWidth={3} />
      <h4>Devisão right menor que left</h4>
      <SplitScreen Left={<LeftSide />} LeftWidth={3} Right={<RightSide />} rightWidth={1} />
    </>
  )
}

export default App
