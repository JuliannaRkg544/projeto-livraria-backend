import db from "../db.js"


export async function signBook(req,res){
const book = req.body
try {
    const newBook = await db.query(`INSERT INTO books (titulo, autor, capa, descricao, quantidade, valor) VALUES ($1, $2, $3, $4,$5,$6)`,
    [book.titulo, book.autor, book.capa, book.descricao, book.quantidade, book.valor])
    res.sendStatus(201)
    
} catch (error) {
    console.log(error)
    res.sendStatus(500)
    return
}

}


export async function getBooks(req,res){
    try {
        const books = await db.query(`SELECT * FROM books`)
        res.status(201).send(books.rows)
        
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
        return
    }
    
    }