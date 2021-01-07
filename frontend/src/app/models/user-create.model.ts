export class UserCreate {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    country: string;
    phoneNumber: string;
    email: string;
    password: string;
    structureId: string;
    status: Boolean;
    roles: string[];
    views: ViewSelected[];
}

export class ViewSelected {
    name: string;
    child?: Boolean;
    update?: Boolean;
    delete?: Boolean;
}
