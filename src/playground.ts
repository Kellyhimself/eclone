import { db } from "./server/db";

await db.user.create({
    data: {
        emailAddress: 'test@gmail.com',
        firstName: 'elliot',
        lastName: 'chong',
    }
})
console.log('done')