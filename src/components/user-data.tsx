import { useCallback } from "react";
import useFetchData from "../hooks/fetch-data";

const requestUser = async (url) => {
  const response = await fetch(url);
  if (!response.ok) return {}
  return await response.json()
}

const UserData = () => {
  const fetchUser = useCallback(
    () => requestUser("https://jsonplaceholder.typicode.com/users/1"),
    [],
  )

  const { data: user } = useFetchData(fetchUser);

  if (!user) return (<h1>Loading</h1>)

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

export default UserData;
