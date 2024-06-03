import React from 'react'
type HandleHardCoverBtnProps = {
    handleFilterByTypes: (bookTypes: string) => void,
    handleGetBooksBtn: () => void,
    types: string[]
}

const Buttons = ({handleFilterByTypes, handleGetBooksBtn, types}: HandleHardCoverBtnProps) => {

  return (
    <div className='button'>
        {types.map((item,index) => (
          <a href="#" key={index} onClick={(e) => handleFilterByTypes((e.target as HTMLElement).innerText)}>{item}</a>
        ))}
        <button onClick={handleGetBooksBtn}>Get Books</button>
    </div>
  )
}

export default Buttons