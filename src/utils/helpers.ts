import  _ from 'lodash'
import { AuthorListProps } from '../utils/types';


export const filterBooks = (authorList: AuthorListProps, isHardCoverOnly: boolean, gender: string) => {
    const filterBooks = authorList.authors.filter((item) => item.gender === gender && item.books !== null);
    let books = _.flatMap(filterBooks,"books").filter((item) => isHardCoverOnly ? item.type === "Hardcover" : item);
    books = _.sortBy(books,"name");

    return books;
 }