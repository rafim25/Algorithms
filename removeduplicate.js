function removeDuplicates(str) {
    var str = "abcdeeghhghh".split('');
    if (str == null) return;
    var len = str.length;
    if (len < 2) return;

    var  tail = 1;

    for (var i = 1; i < len; ++i) {
        var j;
        for (j = 0; j < tail; ++j) {
            if (str[i] == str[j]) break;
        }
        if (j == tail) {
            str[tail] = str[i];
            ++tail;
        }
    }
    str.length = tail;
   console.log(str);
}

removeDuplicates("sdfdsf");