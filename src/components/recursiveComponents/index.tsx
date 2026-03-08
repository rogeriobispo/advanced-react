
const IsObject = (data) => {
  return typeof data === 'object' && data !== null;
}

const RecrusiveComponent = ({ data }: { data: any }) => {
  if (!IsObject(data)) return <>{data}</>

  return (
    <ul>
      {Object.entries(data).map(([key, value]) => (
        <li key={key}>
          <strong>{key}:</strong>
          <RecrusiveComponent data={value} />
        </li>
      ))}
    </ul>
  )
}

export default RecrusiveComponent;
