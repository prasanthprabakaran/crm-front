import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">CRM App</span></h1>
            </header>
            <main className="public__main">
                <p>Customer Relationship Application</p>
                <br />
                <p>Owner: John Doe</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public