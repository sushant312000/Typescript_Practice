"use strict";
class StudentInfo extends PersonInfo {
    //constructor
    constructor(name, age, tmark) {
        super(name, age);
        //declare variable
        this.marks = 0;
        this.marks = tmark;
    }
    //custom methods
    getMarks() {
        return this.marks;
    }
    setMarks(tmark) {
        this.marks = tmark;
    }
}
let _std = new StudentInfo("Sheena", 23, 78);
_std.getDetail();
_std.getMarks();
