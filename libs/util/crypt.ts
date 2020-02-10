import * as bcrypt from 'bcrypt';

const salt = bcrypt.genSaltSync();

export async function encrypt(password: string) {
    return await bcrypt.hash(password, salt);
}

export async function compare(password: string, encrypted: string) {
    return await bcrypt.compare(password, encrypted);
}
