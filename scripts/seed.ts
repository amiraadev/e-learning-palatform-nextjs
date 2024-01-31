const { PrismaClient } = require("@prisma/client") ;

const database = new PrismaClient();
async function main (){
  try {
    await database.category.createMany({
        data:[
            {name:"Computer science"},
            {name:"Web Development"},
            {name:"Automation"},
            {name:"DevOps"},
            {name:"Machine learning"},
            {name:"Data science"},
        ]
    })
    console.log("success");
    
  } catch (error) {
    console.log("Error seeding the database categories",error);
    
  } finally {
    await database.$disconnect()
  }
}
main()