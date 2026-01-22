const ControlledComponent = ({ user }) => {

  return (
    <div>
      <h2>User Info</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default ControlledComponent;
