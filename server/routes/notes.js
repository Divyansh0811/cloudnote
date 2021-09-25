const express = require("express");
const router = express.Router();
const fetchUser = require("../middleware/fetchUser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");
const { update } = require("../models/Notes");

//Fetching all notes  GET: "/api/notes/fetchallnotes". LOGIN REQUIRED
router.get("/fetchallnotes", fetchUser, async (req, res) => {

  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error)
    res.status(500).send("Something went wrong!")
  }
});

//Adding a note POST: "/api/auth/addanote". LOGIN REQUIRED
router.post(
 "/addanote", fetchUser,
 [
  body("title", "Title must be atleast 3 character)").isLength({ min: 3 }),
  body("description", "Note must be atleast 3 character").isLength({ min: 3 }),
 ],
 async (req, res) => {
   try {
     //if any validation errors:
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
     }
     const {title, description, tags} = req.body;
     const note = new Notes({title, description, tags, user: req.user.id})
     const savedNote = await note.save()
     res.send(savedNote)
   } catch (error) {
     console.error(error)
     res.status(500).send("Something went wrong!")
   }
 }
);

//UPDATE an existing note: PUT: "/api/notes/updatenote". LOGIN REQUIRED
router.put('/updatenote/:id', fetchUser,async (req, res) => {
  const {title, description, tags} = req.body;

  const updatedNote = {};
  if(title){updatedNote.title = title}
  if(description){updatedNote.description = description}
  if(tags){updatedNote.tags =tags}

  var note = await Notes.findById(req.params.id)
  if(!note){return res.status(401).send("Not allowed")}
  if(note.user.toString() !== req.user.id){
    return res.status(401).send("Not authorised")
  }

  note = await Notes.findByIdAndUpdate(req.params.id, {$set: updatedNote}, {new: true})
  res.json(note)
})
module.exports = router;
