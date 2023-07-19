import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "./models/index.js";
import { Contact } from "./models/ContactModel.js";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/api/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/api/contacts", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.json(newContact);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/api/contacts/:id", async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Kontakt gelöscht mit der ID: " + req.params.id });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put("/api/contacts/:id", async (req, res) => {
  try {
    await Contact.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Kontakt bearbeitet mit der ID: " + req.params.id });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/api/contacts/:id", async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    res.json(contact);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(PORT, () => {
  console.log("Server listening on port: " + PORT);
});
