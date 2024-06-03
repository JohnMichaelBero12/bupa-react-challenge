import React from 'react'
import { filterBooks, AuthorListProps } from  '../utils/helpers';

type CardProps = {
    gender: string,
    isHardCoverOnly: boolean,
    authorList: AuthorListProps
}

const Card = ({gender, isHardCoverOnly, authorList}: CardProps) => {
    const books = filterBooks(authorList, isHardCoverOnly, gender);
    return (
    <div className="card">
        <h2 className="card__heading">
            {isHardCoverOnly && "Hardcover"} Books with {gender} Owner
        </h2>
        <div className="card__book-list">
            {books.map((item,index) => (
                <p key={index}>{item.name}</p>
            ))}
        </div>
    </div>
  )
}

export default Card