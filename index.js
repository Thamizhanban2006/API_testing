
const express = require('express');
const { resolve } = require('path');
const data = require('./data.json')
const app = express();
const port = 3001;

app.use(express.static('static'));

app.use(express.json());
app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

// app.get('/students',(req,res)=>{
//   res.send(res);
// })

app.post("/students/above-threshold",(req,res)=>{
  const {threshold} = req.body;


const filteredStudents = data
  .filter(student => student.total >=parseInt(threshold)) // Filtering based on total marks
  .map(student => ({
    name: student.name,
    total: student.total
  }));


  const output = {
    count: filteredStudents.length,
    students: filteredStudents
  };

  res.json(
        output
    )
//   
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// console.log(data);
