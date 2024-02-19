const { Employee } = require("./models/Employee.js")
const { User } = require("./models/User.js")

const resolvers = {
    Query: {
        greetings: () => "Helloooo",
        welcome: (parent, args) => `Hello ${args.name}`,
        employees: async () => await Employee.find({}),
        employee: async (parent, args) => await Employee.findById(args.id),

        login: async (parent, args)=> {
            const { username, password } = args;

            const user = await User.findOne({ username })
            if(!user || user.password !== password){
                throw new Error(`Invalid username or password`)
            }
            return user

        }
    },
    Mutation: {
        create: async(parent, args) => {
            const { firstName, lastName, email, gender, salary } = args;
            const newEmployee = new Employee({
                firstName,
                lastName,
                email,
                gender,
                salary
            });
            await newEmployee.save();
            return newEmployee;
        },
        update: async (parent, args) => {
            const { id } = args;
            const updatedEmployee = await Employee.findByIdAndUpdate(id, args)
            if(!updatedEmployee){
                throw new Error(`Employee with ID ${id} not found`);
            }
            return updatedEmployee;
        },
        delete: async(parent, args) => {
            const { id } = args;
            const deletedEmployee = await Employee.findByIdAndDelete(id);
            if(!deletedEmployee){
                throw new Error(`Employee with ID ${id} not found`);
            }
            return deletedEmployee;
        },

        createUser: async(parent, args) => {
            const { username, email, password } = args;
            const newUser = new User({
                username,
                email,
                password
            });
            await newUser.save();
            return newUser;
        },

    },
};

module.exports = { resolvers };