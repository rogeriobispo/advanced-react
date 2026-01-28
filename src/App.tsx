import withLoading from "./ components/HighOrderComponent";
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

  const UserListWithLoading = withLoading(UserList)

  return (
    <>
      <UserListWithLoading isLoading={true} />
      <UserListWithLoading isLoading={false} users={[{ id: 1, name: "rogerio bispo" }]} />
    </>

  )
}

export default App
