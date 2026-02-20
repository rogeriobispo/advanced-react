import { useEffect, useState } from "react";

const useFetchUser = (userId: number) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
    //poderia ser uma iife também, mas preferi deixar a função mais clara
  }, []);

  return user;
}

export default useFetchUser;
