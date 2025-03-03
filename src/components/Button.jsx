const Button = (props) => {
  return (
    <button
      {...props}
      className="bg-slate-400 rounded-md text-white text-left p-2"
    >
      {props.children}
    </button>
  )
}

export default Button
