//constants cant be altered
const s = [5, 7, 2];
function editInPlace() {
    'use strict';
    //however values inside an array which is assigned to a constant are mutable
    s[0] = 2;
    s[1] = 5;
    s[2] = 7

}