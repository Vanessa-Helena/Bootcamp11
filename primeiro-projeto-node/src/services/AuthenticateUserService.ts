import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign, verify } from 'jsonwebtoken';

import User from '../models/User';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error('Incorrect email/password combination.');
    }

    // user.password - senha criptografada
    // password - senha não-criptrografada

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('Incorrect email/password combination.');
    }

    // usuario autenticado

    const token = sign({}, '8406383a46810cdfaa207f1db085f70b', {
      subject: user.id,
      expiresIn: '1d',
    });

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
