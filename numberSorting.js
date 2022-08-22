{
    const numbers = [2, 5, 1, 4, 3];

    function addBtn(){
        for(let i = numbers.length - 1; i > 0; i--){
            j = Math.floor(Math.random() * i);
            k = numbers[i];

            numbers[i] = numbers[j];
            numbers[j] = k;
        }
        console.log(numbers);
    }
    
}
