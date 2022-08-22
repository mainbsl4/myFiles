const persons = ["raihan", "rahat", "main", "muntary", "raihan", "rahat", "main", "muntary"];
function filtering(names){
    const array = [];
    for(let i = 0; i < names.length; i++){
        const index = names[i];
        if(array.includes(index) === false){
            array.push(index);
        };
    };
    return array;
};
const add = filtering(persons);
console.log(add);
