export const TESTE = 'TESTE';
var http = require('http');

function ttt(){
    http.get({
        hostname: 'localhost',
        path: '/Safira/material/json',
        headers: {
            "Accept": "application/json"
        },
        agent: false,
        port: 8090
    }, (res) => {
        res.on("data", function(chunk){
            alert(chunk);
        })
    });
}

export function teste(dispatch){
    ttt();
    return{
        type: TESTE
    }
}