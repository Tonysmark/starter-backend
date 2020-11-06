import * as bcrypt from 'bcrypt';

const salt = bcrypt.genSaltSync();

async function encrypt(password: string) {
    return await bcrypt.hash(password, salt);
}

async function compare(password: string, encrypted: string) {
    return await bcrypt.compare(password, encrypted);
}

export {encrypt, compare};
