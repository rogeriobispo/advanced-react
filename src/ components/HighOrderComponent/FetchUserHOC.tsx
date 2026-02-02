import { useEffect, useState } from "react";

const fetchUserHOC = (ComponentToReturn, userId) => {
  return function WrappedComponent(props) {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
          const data = await response.json();
          setUserData(data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchData();
    }, [userId]);

    return <ComponentToReturn user={userData} {...props} />;
  }

}

export default fetchUserHOC
