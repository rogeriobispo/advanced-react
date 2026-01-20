import SplitScreen from "./components/splitScream"
import { frameworks, langs } from "./data/datas"
import IteratorList from "./components/lists"
import BigInfoList from "./components/lists/langs/BigInfoList"
import SmallInfoListFrameworks from "./components/lists/frameworks/smallList"
import SmallInfoListLangs from "./components/lists/langs/smallListItems"
import Modal from "./components/modal"
import UserFetchContainer from "./components/containerPattern/userFetchContainer"
import UserDetail from "./components/containerPattern/userDatail"

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
      <UserFetchContainer>
        <UserDetail />
      </UserFetchContainer>
    </>
  )
}

export default App
