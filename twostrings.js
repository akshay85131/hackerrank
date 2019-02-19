function twoStrings(s1, s2) {
    let s3= s1.split('').sort();
    let s4 = s2.split('').sort();
    let x = [],b=0;
    s4.forEach((a) => {
            if (a == s3[b]) {
                x.push(a);
        } 
        b++;
        })
  
    
    if (x.length === 0) {
        return "NO";

    }
    else { return "YES";}

}
