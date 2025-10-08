export async function generateStaticParams() {
  const posts = await db.posts.findMany({
    where : {
        isFamous : true,
    },
    select: {
        id: true
    }
  })
  return posts.map((post : any) => ({
    id : post.id
  }));
}

export const dynamicParams = true;

export const revalidate = 60;

export async function ISR( {params } : { params : {
    id : string
}}) {
    const post =  await db.posts.findUnique({
        where : {
            id : parseInt(params.id)
        }
    })
     if(!post){
        return <div>
            no course found

        </div>
     }

    return <div>
       {post.title}
    </div>
}