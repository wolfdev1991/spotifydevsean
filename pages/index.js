import Layout from '../components/Layout'
import Link from 'next/link'

const Index = () => (
   <Layout>
    <div className="row mt-5 justify-content-center">
        <h1>Welcome to spotify made with Next.js</h1>
    </div>
    <div className="row mt-5 justify-content-center">
        <Link href="/spotify">
            <a className="btn btn-success">Click here and enjoy the fun</a>
        </Link>
    </div>
   </Layout>
)

export default Index