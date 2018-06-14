const arrRed = [1, 3, 5];
const arrBlue = [2, 4, 6];

function WaterAndBottle(red, blue) {
    let stats = [];

    let i = 0;
        j = 0;

    while (i < blue.length && j < red.length) {
        if (red[j] > blue[i]) {
        // записываю в массив stats обькты с инфо о том в какую бутылку и из какой сколько было перелито
            stats.push({['Bottle ' + i +' from']: j+1 , total: blue[i]});
            red[j] = red[j] - blue[i];
            i++;
        } else {
            stats.push({['Bottle ' + i +' from']: j+1 , total: red[j]});
            blue[i] = blue[i] - red[j];
            red[j] = 0;
            j++;
        }
    }
    
    return stats;
}

console.log(WaterAndBottle(arrRed, arrBlue))
