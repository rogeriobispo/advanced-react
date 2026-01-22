import { useEffect, useState } from "react";
import ControlledComponent from ".";

const ParentComponent = () => {
  const [user, setUser] = useState({ name: 'John Doe', email: '' });

  useEffect(() => {
    const response = fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(data => setUser({ name: data.name, email: data.email }));
  }, []);

  return (
    <ControlledComponent user={user} />
  )
}

export default ParentComponent;
