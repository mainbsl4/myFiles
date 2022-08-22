{
    const text = ["Banana", "apple", "Mango"]

        text.sort(function (a, b) {
            let x =  a.toLowerCase();
            let y =  b.toLowerCase();
    
            if(x < y){return -1;};
    
            if(x > y){return 1;};
    
            return 0;
        });
        console.log(text);
};
