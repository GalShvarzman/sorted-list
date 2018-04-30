function SortedList(){
    this.list = [];
}

SortedList.prototype = {
    getCount(){
        return this.list.length;
    },
    add(valuesArray){
        this.list.push(...valuesArray);
        this.list.sort((a,b)=>{
            return a-b
        })
    },
    search(valueToFind){
        if(this.list.length) {
            let index = 0;
            return this.internalSearch(this.list, valueToFind, index);
        }
        else{
            throw new Error("The list is empty");
        }
    },
    internalSearch(array, valueToFind, index){
        if(array.length > 1) {
            let currentArray = new SortedList();
            let middle = Math.floor(array.length / 2);
            if (array[middle] === valueToFind) {
                return index + middle;
            }
            else if (valueToFind < array[middle]) {
                currentArray.list = array.slice(0, middle);
                return currentArray.internalSearch(currentArray.list, valueToFind, index);
            }
            else{
                index += middle;
                currentArray.list = array.slice(middle);
                return currentArray.internalSearch(currentArray.list, valueToFind, index);
            }
        }
        else{
            return -1;
        }
    },
    getList(){
        return this.list;
    }
};

module.exports.SortedList = SortedList;