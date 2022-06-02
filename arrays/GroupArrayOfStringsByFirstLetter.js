// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

function myFunction19A(arr) {
    let res = {};
    arr.forEach(word => {
        const letter = word.charAt(0).toLowerCase();
        if (typeof res[letter] !== 'undefined') {
            res[letter].push(word);
        } else {
            res[letter] = [word];
        }
    });
    return res;
}

function myFunction19B(arr) {
    return arr.reduce((acc, cur) => {
        const firstLetter = cur.toLowerCase().charAt(0);
        return { ...acc, [firstLetter]: [...(acc[firstLetter] || []), cur] };
    }, {});
}
