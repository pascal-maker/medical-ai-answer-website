import { PrismaClient, Role, Difficulty } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Create users
  const adminPassword = await bcrypt.hash('admin123', 10);
  const studentPassword = await bcrypt.hash('student123', 10);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@medicalai.com' },
    update: {},
    create: {
      email: 'admin@medicalai.com',
      password: adminPassword,
      name: 'Admin User',
      role: Role.ADMIN,
    },
  });

  const student = await prisma.user.upsert({
    where: { email: 'student@medicalai.com' },
    update: {},
    create: {
      email: 'student@medicalai.com',
      password: studentPassword,
      name: 'Student User',
      role: Role.STUDENT,
    },
  });

  // Create questions
  const q1 = await prisma.question.create({
    data: {
      stem: 'What is the normal range for adult human body temperature?',
      choices: ['34-35°C', '36-37°C', '38-39°C', '40-41°C'],
      answer: 1,
      explanation: 'Normal adult body temperature is typically 36-37°C.',
      tags: ['physiology', 'basics'],
      difficulty: Difficulty.EASY,
    },
  });
  const q2 = await prisma.question.create({
    data: {
      stem: 'Which organ produces insulin?',
      choices: ['Liver', 'Pancreas', 'Kidney', 'Spleen'],
      answer: 1,
      explanation: 'The pancreas produces insulin.',
      tags: ['endocrinology', 'basics'],
      difficulty: Difficulty.EASY,
    },
  });
  const q3 = await prisma.question.create({
    data: {
      stem: 'What is the main function of hemoglobin?',
      choices: ['Transport oxygen', 'Digest fats', 'Produce hormones', 'Store calcium'],
      answer: 0,
      explanation: 'Hemoglobin transports oxygen in the blood.',
      tags: ['hematology'],
      difficulty: Difficulty.MEDIUM,
    },
  });
  const q4 = await prisma.question.create({
    data: {
      stem: 'Which vitamin is essential for blood clotting?',
      choices: ['Vitamin A', 'Vitamin C', 'Vitamin K', 'Vitamin D'],
      answer: 2,
      explanation: 'Vitamin K is essential for blood clotting.',
      tags: ['biochemistry'],
      difficulty: Difficulty.MEDIUM,
    },
  });
  const q5 = await prisma.question.create({
    data: {
      stem: 'Which cranial nerve is responsible for vision?',
      choices: ['Olfactory', 'Optic', 'Oculomotor', 'Trigeminal'],
      answer: 1,
      explanation: 'The optic nerve (II) is responsible for vision.',
      tags: ['neuroanatomy'],
      difficulty: Difficulty.HARD,
    },
  });

  // Create an exam
  await prisma.exam.create({
    data: {
      title: 'Sample Medical Entrance Exam',
      questions: {
        connect: [
          { id: q1.id },
          { id: q2.id },
          { id: q3.id },
          { id: q4.id },
          { id: q5.id },
        ],
      },
    },
  });

  console.log('Seed data created!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 