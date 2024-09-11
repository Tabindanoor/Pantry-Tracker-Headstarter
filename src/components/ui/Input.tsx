interface InputTypes{
  name: string,
  type :string,
  placeholder?: string,
  value?: string,
 
}

const Input = ({name, type, placeholder, value}:InputTypes) => {
  return (
    <div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
      />
    </div>
  )
}

export default Input