
const Form = ({
  label,
  inputValue,
  textareaValue,
  handleInputChange,
  handleTextAreaChange,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        {label}
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>
      <textarea
        value={textareaValue}
        onChange={handleTextAreaChange}
        cols="30" rows="10">
      </textarea>
      <input type="submit" value={'Create'} onSubmit={handleSubmit} />
    </form>
  )
}

export default Form
