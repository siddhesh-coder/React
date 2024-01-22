import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 3001;

// Middleware to enable CORS and parse JSON data
app.use(cors());
app.use(express.json());

// In-memory array to store user data
const userData = [];

// Endpoint to handle form submissions
app.post("/submit-form", async (req, res) => {
  try {
    //get all data from body
    const {firstName, lastName, email, password } = req.body;

    //all the data should exists
    if(!(firstName && lastName && email && password)){
       res.status(400).send("All fields are required");
    }
    userData.push(formData);
    console.log("Received form data:", formData);
    res.json({ message: "Data submitted successfully" });
  } catch (error) {
    console.log(error);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});