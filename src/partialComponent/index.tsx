const PartialComponent = (PartialComponent, partalProps) => {
  return (props) => {
    return <PartialComponent {...partalProps} {...props} />
  }
}

const buttonSize = { small: '12px', medium: '16px', large: '20px' }

const Button = ({ size, text, color, ...props }) => {
  const fontSize = buttonSize[size] || buttonSize.medium
  return <button style={{ fontSize: fontSize, backgroundColor: color }} {...props}>
    {text}
  </button>
}

const RedButton = PartialComponent(Button, { color: 'red' })
const LargeRedButton = PartialComponent(RedButton, { size: 'large' })

export { RedButton, LargeRedButton }

