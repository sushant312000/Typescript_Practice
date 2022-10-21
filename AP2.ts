class User{
    Id: number=0;
    email: string="";
    first_name: string="";
    last_name: string="";
    avatar: string="";

    constructor(Id: number, email: string, first_name: string, last_name: string, avatar: string){
        this.Id = Id;
        this.email = email; 
        this.first_name = first_name; 
        this.last_name = last_name;
        this.avatar = avatar;
    }
}