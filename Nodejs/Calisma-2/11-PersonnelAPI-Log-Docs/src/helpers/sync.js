module.exports = async function () {

    // return null;

    // REMOVE DATABASE
    const {mongoose} = require('../configs/dbConnection');
    await mongoose.connection.dropDatabase();
    console.log('- Database and all data DELETED!')

    // Departments & Personnel
    const Department = require('../models/department.model');
    const Personnel = require('../models/personnel.model');
    const departments = ["FullStack Department", "DevOps Department", "CyberSec Department",]
    departments.forEach(value => {
        // Department Create
        Department.create({name: value}).then((department) => {
            console.log('- Department Added.')
            // Personnel Create
            for (let i in [...Array(10)]) {
                Personnel.create({
                    departmentId: department._id,
                    username: "test" + (value[0] + i),
                    password: "1234",
                    firstName: "firstName",
                    lastName: "lastName",
                    phone: "123456789",
                    email: "test" + (value[0] + i) + "@test.com",
                    title: "title",
                    salary: 2500,
                    description: "description",
                    isActive: true,
                    isAccept: false,
                    isLead: false,
                    startedAt: "2023-10-15 13:14:15"
                })
            }
            console.log('- Personnels Added.')
        })
    })
}
