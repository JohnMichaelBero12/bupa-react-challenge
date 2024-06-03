export type AuthorListProps = 
    {
        name: string,
        gender: string,
        age: number,
        books: {
            name: string,
            type: string
        }[] | null
    }[]
    
export type BookProps = {
    name: string,
    type: string
}