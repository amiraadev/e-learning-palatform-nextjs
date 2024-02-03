const { PrismaClient } = require("@prisma/client") ;

const database = new PrismaClient();
async function main (){
  try {
    await database.category.createMany({
        data:[
            // {name:"Computer science"},
            // {name:"Web Development"},
            // {name:"Automation"},
            // {name:"DevOps"},
            // {name:"Machine learning"},
            // {name:"Data science"},

            {name:"Computer Science"},
            {name:"Engineering"},
            {name:"Music"},
            {name:"Photography"},
            {name:"Fitness"},
            {name:"Accounting"},
            {name:"Filming"},
        ]
    })
    console.log("New categories were created successfully");
    
  } catch (error) {
    console.log("Error seeding the database categories",error);
    
  } finally {
    await database.$disconnect()
  }
}
main()