const buttonSize = { small: '12px', medium: '16px', large: '20px' }

const Button = ({ size, text, color, ...props }) => {
  const fontSize = buttonSize[size] || buttonSize.medium
  return <button style={{ fontSize: fontSize, backgroundColor: color }} {...props}>
    {text}
  </button>
}




export const WarningButton = ({ text, ...props }) => {
  return <Button size="small" color="yellow" text={text} {...props} />
}

export const MediumWarningButton = ({ text, ...props }) => {
  return <Button size="medium" color="yellow" text={text} {...props} />
}

export const LargeWarningButton = ({ text, ...props }) => {
  return <Button size="large" color="yellow" text={text} {...props} />
}
