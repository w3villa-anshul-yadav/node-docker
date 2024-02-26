const express = require('express');
const app = express();
const fs = require('fs')

const PORT = process.env.PORT || 8080;

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.get('/', (req, res) => {
  console.log('> HERE ===========================================',{ message: `Hello i Am Node From Docker from pId: ${process.pid}` });
  res.json({ message: `Hello i Am Node From Docker from pId: ${process.pid}` });
});

app.get('/sum', (req, res)=> {
  let body = req.query;
  console.log('> HERE ===========================================',body);
  let num1 = body.num1;
  let num2 = body.num2;
  num1 = parseInt(num1)
  num2 = parseInt(num2)
  console.log('> HERE ===========================================', num1 , num2);
  sum = num1 + num2
  res.json({sum })
}) 

const filePath = 'custom_image.tar'; // Update this with the path to your file

// Define your API endpoint
app.get('/download', (req, res) => {
    // Set the appropriate headers for the response
    res.setHeader('Content-Disposition', 'attachment; filename=downloaded_file.pdf');
    res.setHeader('Content-Type', 'application/pdf');

    // Stream the file to the response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
});

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT} on pId: ${process.pid}`));