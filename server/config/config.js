process.env.PORT = process.env.PORT || 3000;
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
let urlDB = "";
if (process.env.NODE_ENV === 'dev') {
    urlDB = "mongodb+srv://acdf:80a7cAfVnqrZUZL5@cluster0.7pltq.mongodb.net/acdf?retryWrites=true&w=majority"
} else {
    urlDB = "mongodb+srv://acdf:80a7cAfVnqrZUZL5@cluster0.7pltq.mongodb.net/acdf?retryWrites=true&w=majority"
};
process.env.URLDB = urlDB;
process.env.CADUCIDAD_TOKEN = '48h';
process.env.SEED_AUTENTICACION = process.env.SEED_AUTENTICACION ||  'este-es-el-seed-desarrollo';