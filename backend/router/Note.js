import express from 'express'
import { addNote, deleteNote, getAllNote, getNoteById, updateNote } from '../controller/NoteController.js'

const Router = express.Router()


Router.get('/all',getAllNote)
Router.get('/:id',getNoteById)
Router.post('/addNote', addNote)
Router.put('/updateNote/:id',updateNote)
Router.delete('/delete/:id',deleteNote)

export default Router