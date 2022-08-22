{
    function profiles (fName, lName, cls, age) {
        this.fName = fName;
        this.lName = lName;
        this.cls = cls;
        this.age = new Date(age);

        this.fullName = ()=>{
            return(
                `${this.fName} ${this.lName}`
            )
        };
        this.getDay = () => {
            return(
                `${this.age.getDay() + 1}`
            )
        };
    };

    const student1 = new profiles('md', 'main', 12, '11-12-2004');
    console.log(student1.getDay());
}
