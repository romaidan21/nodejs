const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));

app.set('view engine', 'ejs')

// app.use(bodyParser.urlencoded({extended: false}))
// app.use(cors());
// app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'static', 'index.html'))
// });
app.get('/:userQuery', (req, res) => {
    res.render('index', {data: {userQuery: req.params.userQuery}})
});

// app.post('/', (req, res)=>{
//     console.log(req.body);

//     res.json({success: true});
// })


app.listen(3000, () => {
    console.log('Server start');
});
