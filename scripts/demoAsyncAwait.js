"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//step 2 : Consume REST API
const webApi = 'http://dummy.restapiexample.com/api/v1/employees';
//step 3 : Fetch all data using async/await/promise
const fetAllEmployee = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(url);
    const { data } = yield response.json();
    console.log(data);
    return data;
});
//Call asynchronous function 
fetAllEmployee(webApi);
