// Insertion Sort fonksiyonu
function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

// Verilen dizinin sıralanması ve adımların yazdırılması
const arr = [22, 27, 16, 2, 18, 6];
document.getElementById("output").innerHTML += "<p>Verilen dizi: " + arr.join(', ') + "</p>";
const sortedArr = insertionSort(arr);
document.getElementById("output").innerHTML += "<p>Sıralanmış dizi: " + sortedArr.join(', ') + "</p>";

// Time Complexity Analizi
document.getElementById("output").innerHTML += "<h3>Time Complexity Analizi:</h3>";
document.getElementById("output").innerHTML += "<p>Average case: Aradığımız sayının ortada olması</p>";
document.getElementById("output").innerHTML += "<p>Worst case: Aradığımız sayının sonda olması</p>";
document.getElementById("output").innerHTML += "<p>Best case: Aradığımız sayının dizinin en başında olması.</p>";
