import React, { useState } from 'react'
import AuthorList from '../authors.json'
import Card from '../components/Card'

type IsHardCoverProps = {
    isHardCoverOnly: boolean
}

const Cards = ({isHardCoverOnly}: IsHardCoverProps) => {
    const gender = [...new Set(AuthorList.authors.map(item => item.gender))];
  return (
    <div className='cards'>
        {gender.map((item,index) => 
        <Card 
            key={index} 
            gender={item} 
            isHardCoverOnly={isHardCoverOnly}
            authorList={AuthorList}
        />)}
    </div>
  )
}

export default Cards