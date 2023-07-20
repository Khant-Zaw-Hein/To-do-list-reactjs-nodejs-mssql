
const config = {
    user :'sa',
    password :'localadmin',
    server:'localhost',
    // server:'15.0.2000.5',
    database:'Todo',
    options:{
        trustedConnection: true,
        enableArithAbort : true,
        instancename :'MMO_LENOVO',
        trustServerCertificate: true
    },
    port : 1433
}

module.exports = config; 