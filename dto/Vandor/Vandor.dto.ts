// DTO :: VANDOR 
export interface CreateVandorInput {
    name: string,
    ownerName: string,
    foodType: [string],
    pincode: string,
    address: string,
    phone: string,
    email: string,
    password: string,
    rating: number
}

// DTO :: VANDOR - LOGIN 
export interface VandorLoginInputs {
    email: string,
    password: string
}


// DTO :: VANDOR - PAYLOAD 
export interface VandorPayload {
    _id: string;
    email: string;
    name: string;
    foodType: [string];
}

//  DTO :: VANDOR-EDIT 
export interface EditVandorInputs {
    name: string;
    address: string;
    phone: string;
    foodType: [string];
}