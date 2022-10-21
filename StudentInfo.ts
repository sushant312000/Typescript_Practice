class StudentInfo extends PersonInfo{
    //declare variable
    marks: number = 0;

    //constructor
    constructor(name: string, age: number, tmark: number){
        super(name, age);
        this.marks = tmark;
    }

    //custom methods
    getMarks(): number{
        return this.marks;
    }

    setMarks(tmark: number){
        this.marks = tmark;
    }
}

let _std = new StudentInfo("Sheena", 23, 78);
_std.getDetail();
_std.getMarks();