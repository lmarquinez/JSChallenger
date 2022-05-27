// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

function myFunction19A(a, b) {
    let cleanA = a.replace('%', '');
    let cleanB = b.replace('%', '').split('').reverse();

    let newA = '';
    for (let i = 1; i < cleanA.length; i++) {
        newA += cleanA[i];
    }

    let newB = '';
    for (let i = 0; i < cleanB.length; i++) {
        newB += cleanB[i];
    }
    return cleanA.charAt(0).toUpperCase() + newA + newB;
}

function myFunction19B(a, b) {
    const func = x => x.replace('%', '');
    const first = func(a);
    const second = func(b).split('').reverse().join('');
    return first.charAt(0).toUpperCase() + first.slice(1) + second;
}