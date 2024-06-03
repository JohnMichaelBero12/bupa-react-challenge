import React from 'react'
type HandleHardCoverBtnProps = {
    handleFilterByTypes: (e: React.MouseEvent<HTMLAnchorElement>) => void,
    handleGetBooksBtn: () => void,
    types: string[]
}

const Buttons = ({handleFilterByTypes, handleGetBooksBtn, types}: HandleHardCoverBtnProps) => {

  return (
    <div className='button'>
        {types.map((item) => (
          <a href="#" onClick={(e) => handleFilterByTypes(e)}>{item}</a>
        ))}
        <button onClick={handleGetBooksBtn}>Get Books</button>
    </div>
  )
}

export default Buttons