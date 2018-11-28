const bubbleSort = array => {
    let swapped;
    do {
        swapped = false;
        array.forEach((number, index) => {
            if (number > array[index + 1]) {
                [array[index], array[index + 1]] = [array[index + 1], array[index]];
                swapped = true;
            }
        });
    } while (swapped);
    return array;
};

function _bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                const less = array[j + 1];
                array[j + 1] = array[j];
                array[j] = less;
            }
        }
    }

    return array;
}

mocha.setup("bdd");
const { assert } = chai;

describe("Bubble Sort", () => {
    it("Should implement bubble sort", () => {
        assert.deepEqual(bubbleSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
        assert.deepEqual(bubbleSort([5, 3, 1, 2, 4]), [1, 2, 3, 4, 5]);
        assert.deepEqual(_bubbleSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
        assert.deepEqual(_bubbleSort([5, 3, 1, 2, 4]), [1, 2, 3, 4, 5]);
    });
});