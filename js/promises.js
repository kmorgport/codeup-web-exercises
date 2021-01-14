const github = 'https://api.github.com/users/kmorgport/events/public'

fetch(github,{
    headers: {
        'Authorization': githubToken
    }
})
    .then(response => response.json()) //Converting the response to a JSON object
    .then(data => console.log(data[0]))
    .catch( error => console.error(error));


function wait(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (time===1000) {
                resolve('You\'ll see this after 1 second.');
            } else {
                resolve('You\'ll see this after 3 seconds.');
            }
        }, time);
    });
}



wait(1000).then(message=>console.log(message));
// if resolved, will log "Promise resolved!" and "Here is your data: ..."
wait(3000).then(message=>console.log(message));
// if rejected, will log "Promise rejected!" and "Network Connection Error!"