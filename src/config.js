'use strict'
module.exports={
    port: process.env.PORT || 3000,
    db: process.env.SQLSERVER || '',
    SECRET_TOKEN: 'secretcobranzas2019',
    sizeSeeds: 0,
    sizeSupervisors:1,
    sizeGestores:1,
    mantenedorNow: ips.prd,
}

const ips= {
    qas: '100',
    dev: '200',
    prd: '300',
}