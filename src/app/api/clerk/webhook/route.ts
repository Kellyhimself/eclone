
//as you configure this, remmber to disable some stuff 
//at the eslint code, we dont want eslint to be shouting at us

export const POST = async (req: Request)=> {
    const {data} = await req.json()
    console.log('clerk webhook received', data)
    return new Response('Webhook received', {status: 200})
}
