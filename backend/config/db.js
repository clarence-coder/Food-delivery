import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://clarencefranklin88:Mojojojo1@cluster0.5kvplmv.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}
