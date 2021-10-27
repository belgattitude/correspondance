import type { Prisma } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import { poemsSeed } from './seeds/poem/poems.seed';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    firstName: 'Sébastien',
    lastName: 'Vanvelthem',
    nickname: 'belgattitude',
    email: 'belgattitude@gmail.com',
  },
];

async function main() {
  console.log(`Start seeding ...`);
  // users
  for (const u of userData) {
    const user = await prisma.user.upsert({
      where: { email: u.email },
      update: {},
      create: u,
    });
    console.log(`Created or updated user with id: ${user.id}`);
  }
  // poems
  for (const poem of poemsSeed) {
    await prisma.poem.upsert({
      where: {
        slug: poem.slug,
      },
      update: {
        content: poem.content,
        keywords: poem.keywords,
      },
      create: poem,
    });
    console.log(`Created or updated poem with slug: ${poem.slug}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
