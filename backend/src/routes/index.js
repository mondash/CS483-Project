import * as notebook from '../controllers/notebook.controller';

export default app => {
    app.route('/notes')
        .get(notebook.getAllNotes)
        .post(notebook.createNote);
    
    app.route('/notes/:noteId')
        .get(notebook.getNote)
        .put(notebook.updateNote)
        .delete(notebook.deleteNote);
}