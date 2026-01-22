import { useEffect, useState } from "react";

const UnControlledComponent = () => {
  const [user, setUser] = useState({ name: 'John Doe', email: '' });

  useEffect(() => {
    const response = fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(data => setUser({ name: data.name, email: data.email }));
  }, []);

  return (
    <div>
      <h2>User Info</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default UnControlledComponent;
