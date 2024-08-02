import {Router} from 'express';
import User from '../mongoose/schemas/UserSchema.mjs'
import { checkSchema, validationResult, matchedData } from "express-validator";
import { createUserValidationSchema } from '../utils/validationSchemas.mjs';
import { hashPassword } from '../utils/passwordEncryptor.mjs';

let router = Router(); 

router.get('/user', async (req, res) => {
    let userData = await User.find();
    res.status(200).send(userData);
})

router.post('/user',
    checkSchema(createUserValidationSchema),
    async (req, res) => {
        let errors = validationResult(req);
        console.log(errors); 
        if (!errors.isEmpty()) {
            return res.status(400).send(`Enter correct data`);  
        }
        let validatedData = matchedData(req);
        validatedData.password = hashPassword(validatedData.password);

        let newUser = new User(validatedData);
        try {
            let savedUser = await newUser.save();
            console.log('User saved to databse');
            return res.status(201).send(savedUser);
        } catch (error) {
            console.log(error);
            return res.status(400).send({ message: error.message });
        }
    })

    export default router;