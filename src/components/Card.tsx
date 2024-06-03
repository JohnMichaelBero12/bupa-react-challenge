import React from 'react'
import { AuthorListProps,BookProps } from '../utils/types';
import { filterBooks } from  '../utils/helpers';
type CardProps = {
    gender: string,
    bookType: string,
    authorList: AuthorListProps,
    books: BookProps[]
}

const Card = ({gender, bookType, authorList}: CardProps) => {
    const books = filterBooks(authorList.filter((item) => item.gender === gender))
                .filter((item) => bookType ? item.type === bookType : item);
    return (
    <div className="card">
        <h2 className="card__heading">
            {bookType} Books with {gender} Owner
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