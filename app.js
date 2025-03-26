//to stop the server ctrl+c
const express = require('express');
const app = express();

app.use(express.json());//every incoming req is converted into json

//priority of use method is higher
app.use((req,res,next) =>{
    console.log("i am use method ");
    next();
});
app.use((req,res,next) =>{
    res.status(200).json({
        msg : "hello i am use method 2.0"
    })
    console.log("use method again ");

});


app.post('/login' , (req , res , next) => {
    console.log("login api is called ");
    res.status(200).json({
        msg : "hello im login api"
    });
});

app.listen(3000);
