import useFetchUser from "../hooks/fetch-user";

const User = () => {
  const user = useFetchUser(1);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <h3>Company</h3>
      <p>Name: {user.company.name}</p>
      <p>Catch Phrase: {user.company.catchPhrase}</p>
    </div>
  );
};

export default User;
