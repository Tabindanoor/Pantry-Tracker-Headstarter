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
        className="bg-white bg-opacity-80 shadow-lg hover:shadow-xl border border-gray-300 rounded-lg p-3 font-semibold text-gray-700 transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
      />
    </div>
  )
}

export default Input