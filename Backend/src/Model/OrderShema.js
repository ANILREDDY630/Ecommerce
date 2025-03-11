import mongoose from 'mongoose';

export const orderSchema = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
    },
    porduct: [
        {
            porductid: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "product",
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            images: {
                type: String,
                required: true
            },
        }
    ],
    shippingAddress:{
        country:{
            type: String,
            required: true
        },
        city:{
            type: String,
            required: true
        },
        address1:{
            type: String,
            required: true
        },
        address2:{
            type: String,
        },
        Zincode:{
            type: Number,
            required: true
        },
        addressType:{
            type: String,
            enum: ["home", "work", "other"],
            default: "home"
    }
    },
    totalAmount:{
        type: Number,
        required: true,
        default: 0
    },
    orderStatus: {
        type: String,
        enum: ["processing", "shipped", "delivered", "cancelled"],
        default: "pending"
    },
    deliveredAt: {
        type: Date
    },
}, { timestamps: true });
const Order = mongoose.model('order', orderSchema);

export default orders;