// promisses

// resolved
// reject
// pending...


// new Promise()

setTimeout(() => {
    console.log('Acabou o setTimeout');

}, 2000);


// promise(callback) 

function getDataFromServer(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('ops.... algo deu errado na api. Não conseguimos buscar os dados');
            reject({
                error: true,
                errorMessage: 'Api não respondeu '

            });
            // resolve({
            //     data: 'Dados que queremos'
            // });
        }, 1500)
    })
}
getDataFromServer('www.api.com')
    .then(data => {
        console.log('then sendo executado. Data : ', data);
    })
    .catch(error => {
        console.log('Catch sendo executado. Error: ', error);
    })
