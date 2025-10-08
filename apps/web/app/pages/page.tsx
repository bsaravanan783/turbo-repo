// import revalidate from "../../lib/actions/action1";

export default async function Pages() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/" , {
        next : {
            revalidate : 10
        }
    }) 
// 
    // const res = await await fetch("https://jsonplaceholder.typicode.com/todos/" , {
    //     next : {
    //         tags : ["todos"]
    //     }
    // })

    const data = await response.json();
    // revalidate();
    console.log(data)
    // console.log(res)
}