const UserDetail = ({ user }) => {
  return (
    <div>
      {user ? (
        <div>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>UserName: {user.username}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  )
}


export default UserDetail;
