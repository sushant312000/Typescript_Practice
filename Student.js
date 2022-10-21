var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var StudentInfo = /** @class */ (function (_super) {
    __extends(StudentInfo, _super);
    //constructor
    function StudentInfo(name, age, tmark) {
        var _this = _super.call(this, name, age) || this;
        //declare variable
        _this.marks = 0;
        _this.marks = tmark;
        return _this;
    }
    //custom methods
    StudentInfo.prototype.getMarks = function () {
        return this.marks;
    };
    StudentInfo.prototype.setMarks = function (tmark) {
        this.marks = tmark;
    };
    return StudentInfo;
}(PersonInfo));
var _std = new StudentInfo("Sheena", 23, 78);
_std.getDetail();
_std.getMarks();
