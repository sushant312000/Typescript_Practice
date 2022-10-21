class UserFeedback{
    userId: number=0;
    firstName: string="";
    locationName: string="";
    postDetails: string="";

    constructor(userId: number, firstName: string, locName: string, postDetails: string){
        this.userId = userId;
        this.firstName = firstName;
        this.locationName = locName;
        this.postDetails = postDetails;
    }
}

const userfeedbackApi = 'http://127.0.0.1:9095/api/users/posts';

const fetchUserDetails = async (url: string): Promise<UserFeedback[]> =>{
    const response = await fetch(url);
    const data: any = await response.json();
    console.log(data);
    return data;
}

fetchUserDetails(userfeedbackApi);