 const Input = ({
    handleChange,
    value,
    labelText,
    htmlFor,
    type,
    className,
    id,
    placeholder,
    autoComplete,
    required = false,
}) => (
    <div className="form-group">
    <label htmlFor={htmlFor}>{labelText}</label>
    <input 
        type={type}
        className={className}
        id={id}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={handleChange}
        value={value}
        required={required}

    />
    </div>
)

export default Input;