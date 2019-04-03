const bcrypt = require('bcryptjs');

const signUp = (parent, args, context, info) => {
    const { name, email, password } = args;
    const hashedPassword = await bcrypt.hash(password, process.env.SALT_ROUNDS);

}