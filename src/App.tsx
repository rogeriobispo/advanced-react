import withLoading from "./ components/HighOrderComponent";
import FetchUserHOC from "./ components/HighOrderComponent/FetchUserHOC";
import fetchUserHOC from "./ components/HighOrderComponent/FetchUserHOC";
import UserDetail from "./ components/HighOrderComponent/UserDetail";
import UserList from "./ components/HighOrderComponent/UserList";

const StepOne = ({ goToNextFlow }) => (
  <>
    <button onClick={() => goToNextFlow({
      stepOne: "Data from Step One"
    })}>Next</button>
    <div>Step One</div>
  </>
);
const StepTwo = ({ goToNextFlow }) => (
  <>
    <button onClick={() => goToNextFlow({
      stepTwo: "Data from Step Two"
    })}>Next</button>
    <div>Step Two</div>
  </>
);
const StepThree = ({ goToNextFlow }) => (
  <>
    <button onClick={() => goToNextFlow(
      { StepThree: "Data from Step Three" }
    )}>Next</button>
    <div>Step Three</div>
  </>
);

function App() {

  const FetchUserWithHOC = fetchUserHOC(UserDetail, 1);

  return (
    <>
      <FetchUserWithHOC />
    </>

  )
}

export default App
