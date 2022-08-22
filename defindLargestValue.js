function maxArray(numbers){
        let largest = numbers[0];
        for(let i = 0; i < numbers.length; i++){
            const index = i;
            const element = numbers[index];
            if(element > largest){
                largest = element;
            }
        }
    return largest;
}
const myArray = [12, 25, 55, 887, 66];
const totalArray = maxArray(myArray);
console.log(totalArray);
