type InputProps = {
  label: string;
  name: string;
  type: 'text' | 'password';
  placeholder: string;
  required?: boolean;
};
export function Input({
  label,
  name,
  type,
  placeholder,
  required,
}: InputProps) {
  return (
    <div className='space-y-2'>
      <label className='block text-lg font-bold' htmlFor={name}>
        {label}
      </label>
      <input
        className='focus:border-primary-600 w-full rounded-md border-2 border-gray-400 bg-transparent px-3 py-1 outline-none'
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}
