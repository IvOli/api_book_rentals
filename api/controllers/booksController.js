const getBooks = async(req, res) => {
    res.send('Books')
}
const createBook = async(req, res) => {
    const { title, author, genre, category, editorial, printing_date, pages, isbn, language, type, image } = req.body;

    res.send(title)
}
export default { getBooks, createBook }