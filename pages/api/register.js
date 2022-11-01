import bcrypt from 'bcrypt'
import Users from '../../models/userModel';

export default async function handler(req, res) {
    //Only POST mothod is accepted
    if (req.method === 'POST') {
        //Getting email and password from body
        const { email, password } = req.body;
        //Validate
        if (!email || !email.includes('@') || !password) {
            res.status(422).json({ message: 'Invalid Data' });
            return;
        }
        const body = req.body
        //Check existing
        const checkExistingUser = await Users.findOne({ email: body.email });
        //Send error response if duplicate user is found
        if (checkExistingUser) {
            res.status(422).json({ message: 'User already exists' });
            return;
        }
        const salt = await bcrypt.genSalt(10);
        const hashpass = await bcrypt.hash(body.password, salt);
        const user = new Users({ fullName: body.fullName, email: body.email, password: hashpass });
        await user.save()
        res.status(200).json({ message: 'Registered successfully' })
        return;
    } else {
        //Response for other than POST method
        res.status(500).json({ message: 'Route not valid' });
        return;
    }
}