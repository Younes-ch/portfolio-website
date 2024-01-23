interface InputProps {
  type: "text" | "email";
  name: "name" | "email" | "subject";
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, name, placeholder, value, onChange }: InputProps) => {
  return (
    <input
      className="input text"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
  );
};

export default Input;
