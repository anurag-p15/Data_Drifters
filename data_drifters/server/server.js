const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const { exec } = require('child_process');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer setup for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/api/analyze', upload.single('file'), async (req, res) => {
  try {
    const { prompt } = req.body;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Save the uploaded file temporarily
    const fileName = `temp_${Date.now()}.csv`;
    fs.writeFileSync(fileName, file.buffer);

    // Execute the analysis (replace this with your OpenAI API call)
    exec(`/Users/madhavpatel/Desktop/SIH/OpenAIAPi.py ${fileName} "${prompt}"`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return res.status(500).json({ error: 'An error occurred during analysis' });
      }

      const analysisResult = stdout;
      res.json({ analysisResult });

      // Clean up the temporary file
      fs.unlinkSync(fileName);
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
