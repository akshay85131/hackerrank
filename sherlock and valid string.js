function isValid(s) {
   let dictionary = {};
       
        for (let i = 0; i < s.length; i++) {
            if (dictionary[s[i]]===undefined) {
                dictionary[s[i]] = 1;
            } else {
                dictionary[s[i]]++;
            }
        }
        let count = 0;
        let prev;
        for (let i in dictionary) {
            if (prev != undefined) {
                if (prev < dictionary[i] || prev > dictionary[i]) {
                    count++;
                }
            } else {
                prev = dictionary[i];
            }
            if (count > 1) {
                return 'NO';
            }
        }
        return 'YES';
    }
