class RadixSort {
    sort(arr) {
        const max = this.getMax(arr);
        for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
            this.countingSort(arr, exp);
        }
    }

    getMax(arr) {
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }

    countingSort(arr, exp) {
        const n = arr.length;
        const output = new Array(n);
        const count = new Array(10).fill(0);

        // Store count of occurrences
        for (let i = 0; i < n; i++) {
            count[Math.floor(arr[i] / exp) % 10]++;
        }

        // Change count[i] to position of digit in output
        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }

        // Build the output array
        for (let i = n - 1; i >= 0; i--) {
            const index = Math.floor(arr[i] / exp) % 10;
            output[count[index] - 1] = arr[i];
            count[index]--;
        }

        // Copy the output array to arr[]
        for (let i = 0; i < n; i++) {
            arr[i] = output[i];
        }
    }
}

// Main function
function main() {
    const arr = [170, 45, 75, 90, 802, 24, 2, 66];
    const rs = new RadixSort();
    rs.sort(arr);
    console.log("Sorted array is:");
    console.log(arr.join(" "));
}

// Run the program
main();