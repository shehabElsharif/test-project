import React from 'react'

const ColorInput = ({handleSubmit, colorName, setcolorName}) => {
  return (
    <form action="submit" onSubmit={(e) =>{handleSubmit(e)}}>

          <label htmlFor="input">input</label>
          
          <input
                autoFocus
                id='colorName'
                type='text'
                placeholder='write a color of choice'
                required
                value={colorName}
                onChange={(e) => setcolorName(e.target.value)}
            />
      </form>
  )
}

export default ColorInput