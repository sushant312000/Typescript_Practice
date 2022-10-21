//step 1 : define interface / class
interface Employee {
    Id: number;
    employee_name: string;
    employee_salary: number;
    employee_age: number;
    profile_image: string;
}
//step 2 : Consume REST API
const webApi = 'http://dummy.restapiexample.com/api/v1/employees';

//step 3 : Fetch all data using async/await/promise
const fetAllEmployee = async (url: string): Promise<Employee[]> =>{
    const response = await fetch(url);
    const {data}: any = await response.json();
    console.log(data);
    return data;
}

//Call asynchronous function 
fetAllEmployee(webApi);