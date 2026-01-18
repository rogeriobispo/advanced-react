const IteratorList = ({ items, sourceName, ItemComponet }) => {
  return (
    <>
      {items.map((item, index) => (
        <ItemComponet key={`${sourceName}-${index}`} item={item} {...{ [sourceName]: item }} />
      ))}
    </>
  )

}

export default IteratorList;
