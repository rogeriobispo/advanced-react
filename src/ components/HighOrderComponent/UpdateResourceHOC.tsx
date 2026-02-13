import { useEffect, useState } from "react";

const UpdateResourceHOC = (ComponentToReturn, resourceUrl, resourceName) => {
  return function WrappedComponent(props) {
    const [initialResourceData, setInitialResourceData] = useState(null);
    const [resourceData, setResourceData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(resourceUrl);
          const data = await response.json();
          setInitialResourceData(data);
          setResourceData(data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchData();
    }, [resourceUrl]);

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setResourceData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const UpdateResourceData = async () => {
      try {
        const response = await fetch(resourceUrl, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(resourceData),
        });
        const data = await response.json();
        setResourceData(data);
      } catch (error) {
        console.error("Error updating user data:", error);
      }
    }
    const resourceProps = {
      [resourceName]: resourceData,
      onInputChange: handleInputChange,
      [`onUpdate${resourceName.charAt(0).toUpperCase() + resourceName.slice(1)}`]: UpdateResourceData,
    }
    return (
      <ComponentToReturn
        {...resourceProps}
        {...props}
      />
    );
  }
}

export default UpdateResourceHOC;
