import { PrismaClient }  from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

// Function to create fake products
async function createFakeProduct() {
  const product = await prisma.product.create({
    data: {
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: parseFloat(faker.commerce.price()),
      variants: {
        create: [...Array(3)].map(() => ({
          color: faker.commerce.color(),
          size: faker.random.arrayElement(['S', 'M', 'L', 'XL']),
          stock: faker.datatype.number({ min: 1, max: 100 }),
        })),
      },
      collections: {
        create: [...Array(2)].map(() => ({
          name: faker.commerce.department(),
        })),
      },
    },
  });
  console.log('Created Product:', product);
  return product;
}

// Function to create fake collections
async function createFakeCollection() {
  const collection = await prisma.collection.create({
    data: {
      name: faker.commerce.department(),
      products: {
        create: [...Array(2)].map(() => ({
          name: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          price: parseFloat(faker.commerce.price()),
          variants: {
            create: [...Array(2)].map(() => ({
              color: faker.commerce.color(),
              size: faker.random.arrayElement(['S', 'M', 'L', 'XL']),
              stock: faker.datatype.number({ min: 1, max: 100 }),
            })),
          },
        })),
      },
    },
  });
  console.log('Created Collection:', collection);
  return collection;
}

// Main function to generate fake data
async function generateFakeData() {
  try {
    // Generate fake products
    for (let i = 0; i < 5; i++) {
      await createFakeProduct();
    }

    // Generate fake collections
    for (let i = 0; i < 3; i++) {
      await createFakeCollection();
    }

    console.log('Fake data generation completed!');
  } catch (error) {
    console.error('Error generating fake data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Call the generateFakeData function
generateFakeData();
