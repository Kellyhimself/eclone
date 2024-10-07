
import { db } from "~/server/db"
//as you configure this, remmber to disable some stuff 
//at the eslint code, we dont want eslint to be shouting at us

export const POST = async (req: Request)=> {
    const {data} = await req.json()
    console.log('clerk webhook received', data)
    const emailAddress = data.email_addresses[0].email_address
    const firstName = data.first_name
    const lastName = data.last_name
    const imageUrl = data.image_url
    const id = data.id

    //use the data to create a new user in our database
    await db.user.create({
        data:{
            emailAddress: emailAddress,
            firstName: firstName,
            lastName: lastName,
            imageUrl: imageUrl,
            id: id,
        }
    })
    console.log('user created')
    return new Response('Webhook received', {status: 200})
}
