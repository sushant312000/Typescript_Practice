class PersonInfo {
    //declaring variables
    protected name: string = "";
    protected age: number = 0;

    //constructor
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    private getName(): string {
        return this.name;
    }

    getDetail(): string{
        return "Name is : "+this.getName();
    }

}