const User = require('../models/User')
const bcrypt = require('bcrypt')

const createUserToken = require('../helpers/create-user-token')

module.exports = class UserController{
    static async register (req, res) {
        const {name, email, phone,password, confirmpassword} = req.body

        //validations
        if(!name){
            res.status(422).json({message: 'o nome é obrigatorio'})
            return
        }

        if(!email){
            res.status(422).json({message: 'o e-mail é obrigatorio'})
            return
        }

        if(!phone){
            res.status(422).json({message: 'o telefone é obrigatorio'})
            return
        }

        if(!password){
            res.status(422).json({message: 'A senha é obrigatorio'})
            return
        }

        if(!confirmpassword){
            res.status(422).json({message: 'A confirmação de senha é obrigatorio'})
            return
        }

        if(password !== confirmpassword){
            res
            .status(422)
            .json({message:'A senha e a confirmação de senha precisam ser iguais!',})
            return
        }

        // check if user exists
        const userExist = await User.findOne({email:email})

        if(userExist){
            res
            .status(422).json({
                message:'Por favor, utilize outro e-mail!',
            })
            return
        }

        // create a password
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)

        //create a user
        const user = new User({
            name,
            email,
            phone,
            password: passwordHash,
        })

        try{
            const newUser = await user.save()
            
            await createUserToken(newUser, req, res)

        } catch(error){
            res.status(500).json({message: error})
        }
    }

    static async login (req, res) {

        const {email, password} = req.body

        if(!email){
            res.status(422).json({message: 'O email é obrigatorio'})
            return
        }

        if(!password){
            res.status(422).json({message: 'A senha é obrigatorio'})
            return
        }

        // check if user exists
        const user = await User.findOne({email:email})

        if(!user){
            res
            .status(422).json({
                message:'Não há usuário cadastrado para esse email!',
            })
            return
        }

        //check if password match with db password
        const checkPassword = await bcrypt.compare(password, user.password)

        if(!checkPassword){
            res
            .status(422).json({
                message:'Senha inválida',
            })
            return
        }

        await createUserToken(user, req, res)

    }
}