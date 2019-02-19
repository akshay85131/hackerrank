function gameOfThrones(s) {
   let a1 = s.split('');
    let a = a1.sort();
    let count = 1, s1 = [], odds = [], oddCount = 0, evenCount = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] == a[i + 1]) {
            count++;
        }
        else {
            s1.push(count);
            count = 1;
        }

    }
  //  console.log(...s1);

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] % 2 !== 0) {
            oddCount++;
        } else {
            evenCount++;
        }

    }
  //  console.log("oddCount-->" + oddCount);
  //  console.log("evenCount-->" + evenCount)
    if (oddCount == 1) {
        return "YES";
    } else if (oddCount == 0) {
        if (evenCount) {
            return "YES";
        } else {
            return "NO";
        }

    } else {
        return "NO";
    }

}
  
