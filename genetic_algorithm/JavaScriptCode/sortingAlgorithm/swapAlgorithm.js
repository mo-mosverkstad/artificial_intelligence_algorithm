function swapWithExtraMemory(a, b) {
    var c = a;
    a = b;
    b = c;
    return [a, b];
}
function swapSum(a, b) {
    b = b + a;
    a = b - a;
    b = b - a;
    return [a, b];
}

function swapDiff(a, b) {
    b = b - a;
    a = a + b;
    b = a - b;
    return [a, b];
}
