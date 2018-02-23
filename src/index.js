/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

    var pref_len = preferences.length;
    var flag_arr = new Array(pref_len);
    for (var i = 0; i< pref_len; i++){ flag_arr[i] = 0; }

    var ans = 0;
    for (i = 0; i < pref_len; i++) {
        var first_step = preferences[i];
        var second_step = preferences[first_step - 1];
        var third_step = preferences[second_step - 1];
        var last_step = preferences[third_step - 1];
        if (first_step === last_step && flag_arr[first_step - 1] === 0
            && flag_arr[second_step - 1]===0 && flag_arr[third_step - 1]===0
            && first_step != second_step && first_step != third_step
            && second_step != third_step){
            ans ++;
            flag_arr[first_step - 1] = 1;
            flag_arr[second_step - 1] = 1;
            flag_arr[third_step - 1] = 1;
        }
    }


    return ans;
};


///console.log(getLoveTrianglesCount([2, 3, 1, 5, 6, 4]));