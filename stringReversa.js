function inverterString(){
    let msg = 'A paciencia e uma virtude';
    let msgInversa = '';

    for (let index = msg.length - 1; index >= 0; index--) {
        msgInversa += msg[index];
    }

    console.log(msgInversa);
}

inverterString();