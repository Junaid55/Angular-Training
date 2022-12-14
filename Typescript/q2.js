var rev = function (arr) {
    return arr.sort(function (a, b) { return a - b; });
};
console.log(rev([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
