function firstCapitalLetter(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

console.log(firstCapitalLetter(`arThuR`));