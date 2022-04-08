
import Layout from '../layout'
import Link from 'next/link'

export default function index({data}) {

  return (

    <Layout>
      <h1>news posts</h1>

      {
        data.map(({id, title ,body })=>(

          <div key={id}>
            <Link href={`posts/${id}`}>

            <h1>
              {title} 
              </h1>
            </Link>
            
            <img src={`https://picsum.photos/id/${id}/300/300`} alt="" />
            <p>
              {body}
            </p>
            </div>
        ))
      }
    </Layout>

  )
}


export async function getStaticProps() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return {
      props: {
        data
      }
    }

  } catch (error) {
    console.log(error)
  }
}
