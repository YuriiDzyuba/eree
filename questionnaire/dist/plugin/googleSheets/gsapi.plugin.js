"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertResultSheets = void 0;
const dotenv = require("dotenv");
const googleapis_1 = require("googleapis");
dotenv.config();
const scopes = ['https://www.googleapis.com/auth/spreadsheets'];
const someKeys = {
    type: 'service_account',
    project_id: 'secondbot-363521',
    private_key_id: 'd32e3ca65de8c78686d8382a0f152eb3adb6b7f8',
    private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDi0ky9PhpZAe8n\nAmm3DI4Y4lWJZjIymGwUZViAYj+5MXowyoZVAsqqj8ZVaTqazHvj08dLWuSXdZ74\neN/yGd2xpXIcmLimCnCfQowOMgI3sbaHwCWyMANfwH6GNaXsIyZKR2dYQuVCMLzW\nBzQet5Qt2poQrYXGJN3PrBCiuUaDnCpNU2j3llzssk9LJNPpBYYGQN01hdT+dKy3\nN6PJAbkqrWGYqRFJdVncCkeOH9XLJtzqtQZbEN1dj9GJu6Ws8bo13NPN+78ZuSE7\noXz0yyl4qYUga7YCeGHVOUPHdUEjaJWICf+m3qNOWqb++29g03yVopJVfhEYvDlT\nV4l2ypQBAgMBAAECggEABGgjIpt8bv+Upy+WyMYwI/GQiW/CZJlRkv4+s1iZUeiB\nNgXGySu5ntmGEChwIZQcyXX2t58MjTjlQ7EDQpacIBKZmF6zGnJ+Knl0O7W+9Vid\nBgdaoiMIuz9b4/ESlBdRG/kF+/T5g90bG55KZekBmngWdYHODTXf13w5iuROL3IP\nwjltXquP+JrCoS87haH1Nhvo/+XitW3BkmTZ3woYH/DUmQYSLAYdf3kxzXLAGQXC\nBjRM3h94cwPQsVD02W/i8glGzpHmK7BxeZXADnMqqG3bo+NFF8vSq4QWXJEjodZ1\nHBqe9Vswt/aHYWgG5nq7euaHcv5l2rAYmkNtFSwk4QKBgQD30raaHWrN+XIGBuFt\nnpRlVqsfpTis7KEX9kMCXjC2FzWv+VI4TS3CcsDv6wLXXAqZ+Evf8VTJbokga5fd\nq16pMHsGkebFGaSHo+wiOc7wYqSVlsYSFtp9IZcIvEPfn/MHG8Y45dODiiarem9m\nRCJlAUr5NDNaF03xqUC5jGNs4QKBgQDqTjEzCJo5ORvpMsyXRMKGDF3LOUezRmQD\nmwc2aKFxJZWHvogflK9IBuAMBJbeP31C5eFMLTY8Yu5/lNh1g2Cc1tF2gprLGVWA\nZgI+AiU5D3tWSlbGIWdGpEoJM4RTk4NW1NFBrC97MM4MJ9KTZjBC7806Fs+pb5tF\nP6MZGufrIQKBgQDaoHGnFDyc6WrGFlvZMQUJQaRFjqSpKTgUw5PqCt4+Rct/Kxx1\nvuCXolTDUzh2dSSFIJ8POP/rlDA1AbZAQGaKK9LcwOotB6o2X056AzWkq+E2doTW\ngILP0UpE0pGuPpVPuBjvKRGoAcCLlr+gIIuXP8S8hGipGdYRU5deGZO9AQKBgASL\nRar+tLb9Y4wvPwaD/93HqZ4CW2CfsdrcC9TDTLY8C11ZlZw/LvMPpxK0mBRxWMWO\nXcMzcUTUilmREm2dAaepBuDsgYIE2MKnt81qDzy/Dx5KTMqE5VLaZtEs3ZkdWEO7\n1t8WLsmN1cEomI3hQnhZ3DoPLTHVB0bdiBU5j1vhAoGAWCx0AqHaamclenCd1+w7\n50rEbqsxlwPUXFIp605mGPvf9ZbOW+eZgnnMZAWp8CXlp0tfgi9dzKymBrhIkVjF\nGp/fqddqTQdZ0NG16NQlquairBosuC/Al3iyjSE7axgFFW1qZY8P+ajcK/n+bPEY\ncCYw8nsIzP6y3hPy+2bYGps=\n-----END PRIVATE KEY-----\n',
    client_email: 'secondbot@secondbot-363521.iam.gserviceaccount.com',
    client_id: '103350226256839861596',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/secondbot%40secondbot-363521.iam.gserviceaccount.com',
};
const auth = new googleapis_1.google.auth.GoogleAuth({
    keyFile: './src/plugin/googleSheets/credentials.json',
    scopes: scopes,
});
const client = auth.getClient();
const googleSheets = googleapis_1.google.sheets({ version: 'v4', auth: client });
const lesson = 'lesson';
const spreadsheetId = process.env.SPREADSHEET_ID;
console.log(spreadsheetId);
const insertResultSheets = async (firstName, phoneNumber, email, chanelSpeak, visitSpeak, companyName, serviceArea, uniqueProduct, currentWeb, needToDo, term, budget, start, aboutClients, aboutCompetitors, designWeb, elementsWeb, pagesWeb, functionalWeb, contentWeb, forgot) => {
    return await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: `${lesson}!A:U`,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
            values: [
                [
                    firstName,
                    phoneNumber,
                    email,
                    chanelSpeak,
                    visitSpeak,
                    companyName,
                    serviceArea,
                    uniqueProduct,
                    currentWeb,
                    needToDo,
                    term,
                    budget,
                    start,
                    aboutClients,
                    aboutCompetitors,
                    designWeb,
                    elementsWeb,
                    pagesWeb,
                    functionalWeb,
                    contentWeb,
                    forgot,
                ],
            ],
        },
    });
};
exports.insertResultSheets = insertResultSheets;
//# sourceMappingURL=gsapi.plugin.js.map