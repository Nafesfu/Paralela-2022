import { dirname } from 'path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

export function existsFolder(path){
    return fs.existsSync(path);
}

export function createIfNotExist(path) {
    if (!existsFolder(dirname(path))) {
        fs.mkdirSync(dirname(path), {recursive: true})
    };
}

export function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}