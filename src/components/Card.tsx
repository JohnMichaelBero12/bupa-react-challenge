import React from 'react'
import { AuthorListProps,BookProps } from '../utils/types';
import { filterBooks } from  '../utils/helpers';
type CardProps = {
    gender: string,
    isHardCoverOnly: boolean,
    authorList: AuthorListProps,
    books: BookProps[]
}

const Card = ({gender, isHardCoverOnly, authorList}: CardProps) => {
    debugger;
    const books = filterBooks(authorList);
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