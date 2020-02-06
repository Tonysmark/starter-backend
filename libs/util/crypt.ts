import * as bcrypt from 'bcrypt';

const salt = bcrypt.genSaltSync();
export default class Crypt {
    static async encrypt(password: string) {
        return await bcrypt.hash(password, salt);
    }

    static async validate(password: string, encrypted: string) {
        return await bcrypt.compare(password, encrypted);
    }
}
