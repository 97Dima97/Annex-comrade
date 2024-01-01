import i18n from 'i18n';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
i18n.configure({
    locales: ['ru', 'en', 'kz'],
    directory: path.join(__dirname, 'locales')
});

export { i18n, path, }

