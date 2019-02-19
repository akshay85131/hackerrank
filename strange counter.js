function strangeCounter(t) {
    var s = 3, ft = 3;
    while (t > ft) {

        s *= 2;
        ft += s;
    }
    return (ft - t + 1);
}
