const { PrismaClient } = require("@prisma/client");

// Create a new PrismaClient instance
const database = new PrismaClient();

// Define the main function to populate categories
async function main() {
  try {
    // Populate categories in the database
    await database.category.createMany({
      data: [
        { name: "Computer Science" },
        { name: "Music" },
        { name: "Fitness" },
        { name: "Photography" },
        { name: "Accounting" },
        { name: "Engineering" },
        { name: "Filming" },
      ],
    });
    // Log success message if categories are created successfully
    console.log("Success");
  } catch (error) {
    // Log error message if an error occurs during category creation
    console.error("Error", error);
  } finally {
    // Disconnect from the PrismaClient instance after operation
    await database.$disconnect();
  }
}

// Call the main function to start the process of populating categories
main();
