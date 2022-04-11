let mass = [];
for(let i = 0; i < 100; i++) mass[i] = Math.floor(Math.random() * 100);

for(let i = 0; i < mass.length; i++) {
    for(let j = i; j > 0; j--) {
        if(mass[j] > mass[j - 1]) {
            let temp = mass[j - 1]
            mass[j - 1] = mass[j]
            mass[j] = temp
        } else {
            break;
        }
    }
}