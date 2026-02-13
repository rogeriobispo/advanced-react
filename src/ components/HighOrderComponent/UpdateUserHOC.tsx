import { useEffect, useState } from "react";

const UpdateUserHOC = (ComponentToReturn, userId) => {
  return function WrappedComponent(props) {
    const [initialUserData, setInitialUserData] = useState(null);
    const [UserData, setUserData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
          const data = await response.json();
          setInitialUserData(data);
          setUserData(data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchData();
    }, [userId]);

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setUserData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const updateUserData = async (userId) => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(UserData),
        });
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error updating user data:", error);
      }
    }

    return (
      <ComponentToReturn
        user={UserData}
        onInputChange={handleInputChange}
        onUpdateUser={updateUserData}
        {...props}
      />
    );
  }
}

export default UpdateUserHOC;
