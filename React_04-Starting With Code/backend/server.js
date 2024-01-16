import express from "express";
import cors from 'cors';

const app = express();
const PORT = 3000;

// Apply CORS middleware before defining routes
app.use(cors());

app.use(express.json());

app.use('/swiggy-proxy', async (req, res) => {
  try {
    const url = 'https://api.allorigins.win/get?url=https://www.swiggy.com/dapi/restaurants/list/update';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
