import dotenv from 'dotenv';
dotenv.config();

import mongoose from "mongoose";
// HOST: `mongodb+srv://helder:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_USER}.kgnjbaq.mongodb.net/javascriptNotes?retryWrites=true&w=majority`

mongoose.connect(`mongodb://127.0.0.1:27017/javascriptNotes`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true
}).then(() => {
    console.log('Conectado ao MongoDB');
}).catch(error => {
    console.log(error);
});

// mongodb://127.0.0.1:27017/javascriptNotes