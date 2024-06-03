import React from 'react'
type HandleHardCoverBtnProps = {
    handleHardCoverBtn: () => void,
    handleGetBooksBtn: () => void
}

const Buttons = ({handleHardCoverBtn, handleGetBooksBtn}: HandleHardCoverBtnProps) => {

  return (
    <div className='button'>
        <a href="#" onClick={handleHardCoverBtn}>Hardcover only</a>
        <button onClick={handleGetBooksBtn}>Get Books</button>
    </div>
  )
}

export default Buttons