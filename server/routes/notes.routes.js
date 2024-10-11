const express = require('express');

const router = express.Router();
const NotesService = require('../services/notes.services');

const Notes = new NotesService();
const validatorHandler = require('../middlewares/validator.handler');
const {
  createNoteSchema,
  updateNoteSchema,
  getNotesSchemas,
} = require('../schemas/notes.schema');

// retorna todos las notas
router.get('/', async (req, res, next) => {
  try {
    const notes = await Notes.find();
    res.json(notes);
  } catch (error) {
    next(error);
  }
});

// retorna una sola nota
router.get(
  '/:id',
  validatorHandler(getNotesSchemas, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const notes = await Notes.findOne(id);
      res.json(notes);
    } catch (error) {
      next(error);
    }
  },
);

// crear una nota
router.post(
  '/',
  validatorHandler(createNoteSchema, 'body'),
  async (req, res, next) => {
    try {
      const { body } = req;
      const newNotes = await Notes.create(body);
      res.status(201).json(newNotes);
    } catch (error) {
      next(error);
    }
  },
);

// actualizar una nota
router.patch(
  '/:id',
  validatorHandler(getNotesSchemas, 'params'),
  validatorHandler(updateNoteSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const { body } = req;
      const notes = await Notes.update(id, body);
      res.json(notes);
    } catch (error) {
      next(error);
    }
  },
);

router.put(
  '/:id',
  validatorHandler(getNotesSchemas, 'params'),
  validatorHandler(updateNoteSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const { body } = req;
      const notes = await Notes.update(id, body);
      res.json(notes);
    } catch (error) {
      next(error);
    }
  },
);

// eliminar usarios
router.delete(
  '/:id',
  validatorHandler(getNotesSchemas, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await Notes.delete(id);
      res.json({ id });
    } catch (error) {
      next(error);
    }
  },
);

module.exports = router;
