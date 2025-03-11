const {router} = require('express')
const auth = require('../Middleware/auth');
const user = require('../Model/userModel');
const orders = require('../Model/OrderShema');
const orderrouter=router()

orderrouter.post('/placeorder',auth,async(req,res)=>{
    try{
        const email=req.user
        const { orderItems, shippingAddress} = req.body
        if(!email){
            return res.status(400).json({message: "Email is required"})
        }
        if(!orderItems || !Array.isArray(orderItems) || orderItems.length === 0){
            return res.status(400).json({message: "Order items are required"})
        }
        if(!shippingAddress){
            return res.status(400).json({message: "Shipping address is required"})
        }
        const neworder=new orders({
            email,
            orderItems,
            shippingAddress
        })
        await neworder.save()
        res.status(200).json({message: "placeed successfully"})
    }
    catch(err){    
        console.log(err);
    }
})
orderrouter.get('/getorder',auth,async(req,res)=>{
    try{
        const email=req.user
        if(!email){
            return res.status(404).json({message: "not found"})
        }
        const orderhistory=await orders.find({email})

        console.log(orderhistory)
    res.status(200).json({message: "placeed successfully"})
    }
    catch(err){
        console.log(err)
    }
})