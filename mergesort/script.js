// Merge Sort fonksiyonu
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);

    return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

// Birleştirme fonksiyonu
function merge(leftArr, rightArr) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            result.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            result.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}

// Verilen dizinin sıralanması ve adımların yazdırılması
const arr = [16, 21, 11, 8, 12, 22];
document.getElementById("output").innerHTML += "<p>Verilen dizi: " + arr.join(', ') + "</p>";
const sortedArr = mergeSort(arr);
document.getElementById("output").innerHTML += "<p>Sıralanmış dizi: " + sortedArr.join(', ') + "</p>";

// Big-O gösteriminin yazdırılması
document.getElementById("output").innerHTML += "<h3>Big-O Gösterimi:</h3>";
document.getElementById("output").innerHTML += "<p>O(n log n)</p>";
