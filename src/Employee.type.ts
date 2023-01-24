export interface TypeEmployee {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

export const TypeEmployeeList: TypeEmployee[] = [{
    id: new Date().toJSON().toString(),
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@email.com"
}]