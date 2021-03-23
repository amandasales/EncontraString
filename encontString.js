const filme = {
    título: 'Carol',
    ano: 2016,
    diretor: 'Todd Haynes',
    protagonista: 'Carol'
};

exibirPropiedade(filme);

function exibirPropiedade(obj) {
    for (prop in obj)
        if (typeof obj[prop] === 'string')
            console.log(prop, obj[prop])
};