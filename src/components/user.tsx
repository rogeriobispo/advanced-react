import useFetchResource from "../hooks/fetch-resource";

const User = () => {
  const { data: user, loading, error } = useFetchResource("https://jsonplaceholder.typicode.com/users/1");

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
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
