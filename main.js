const {SortedList} = require('./sorted-list');
main();

function main() {
    try {
        const list = new SortedList();

        function valuesToAdd(valuesAmount){
            const array = [];
            let obj = {};
            for (let i = 0; array.length < valuesAmount; i++) {
                let value = getRandomValue(valuesAmount);
                if(!obj[value]){
                    obj[value] = true;
                    array.push(value);
                }
            }
            return array;
        }

        list.add(valuesToAdd(10000));

        assert("Validating collection count", list.getCount(), 10000);

        let valueToFind = 3;
        let actualIndex = list.search(valueToFind);
        let arr = list.getList();
        let expectedIndex = arr.indexOf(valueToFind);
        assert("Validating search", actualIndex, expectedIndex);

        console.log("PASS");
    }
    catch (err) {
        console.log("FAIL: " + err.message);
    }
}

function getRandomValue(valuesAmount) {
    const value = Math.floor(Math.random() * valuesAmount);
    return value;
}

function assert(message, actual, expected) {
    if (actual != expected) {
        throw new Error(message);
    }
}