const {Router} =require('express');
const userrouter = Router();


userrouter.get('/login', (req, res) => {
    res.send('<h1>auth request!</h1>');
});

userrouter.post('/create-user', async(req,res)=>{

    


    const {name, email, password} = req.body;
    const userEmail = await userModel.findOne({email:email});
    if (userEmail) {
        return next(new ErrorHandler("User already exists", 400));
      }      

      bcrypt.hash(password, 10, async function(err,hash){
        await userModel.create({
            name:name,
            email:email,
            password:hash,
        })
    }) 
    })

    module.exports = userrouter;