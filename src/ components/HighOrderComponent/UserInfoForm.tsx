import UpdateUserHOC from "./UpdateUserHOC";

const UserInfoForm = UpdateUserHOC(({ user, onInputChange, onUpdateUser }) => {
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Information</h2>
      <form onSubmit={(e) => { e.preventDefault(); onUpdateUser(user.id); }}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={user.name} onChange={onInputChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={user.email} onChange={onInputChange} />
        </div>
        <button type="submit">Update User</button>
      </form>
    </div>
  );
}, 1);

export default UserInfoForm;
