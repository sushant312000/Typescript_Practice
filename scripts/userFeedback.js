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
class UserFeedback {
    constructor(userId, firstName, locName, postDetails) {
        this.userId = 0;
        this.firstName = "";
        this.locationName = "";
        this.postDetails = "";
        this.userId = userId;
        this.firstName = firstName;
        this.locationName = locName;
        this.postDetails = postDetails;
    }
}
const userfeedbackApi = 'http://127.0.0.1:9095/api/users/posts';
const fetchUserDetails = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(url);
    const data = yield response.json();
    console.log(data);
    return data;
});
fetchUserDetails(userfeedbackApi);
