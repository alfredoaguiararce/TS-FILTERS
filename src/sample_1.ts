/* The `interface IUser` is defining the structure of an object representing a user. It specifies that
a user object should have three properties: `id` of type `number`, `name` of type `string`, and
`lastName` of type `string`. */
interface IUser{
    id : number,
    name : string,
    lastName : string
}

/* The `interface IUserFiltered` is defining the structure of an object representing a filtered user.
It specifies that a filtered user object should have two properties: `id` of type `number` and
`name` of type `string`. This interface is used to define the structure of the objects in the
`filteredUsers` array. */
interface IUserFiltered{
    id : number,
    name : string
}

let users: IUser[] = [
    {
        id: 1,
        name: "John",
        lastName: "Doe"
    },
    {
        id: 2,
        name: "Jane",
        lastName: "Smith"
    },
    {
        id: 3,
        name: "Alfredo",
        lastName: "Aguiar"
    },
    // ... more user objects
];

let filteredUsers: IUserFiltered[] = [
    {
        id: 1,
        name: "John"
    },
    {
        id: 2,
        name: "Jane"
    },
    // ... more filtered user objects
];

// Filtrar usuarios cuyos IDs no están en filteredUsers
users = users.filter(user => !filteredUsers.find(filteredUser => filteredUser.id === user.id));

console.log(users); // La variable users ahora contiene los usuarios filtrados