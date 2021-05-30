const express = require('express')
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index.ejs');
})
app.listen(PORT,console.log(`Server is started at http://localhost:${PORT}`))