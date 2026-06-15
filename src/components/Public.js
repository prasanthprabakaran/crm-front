import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header className="public__header">
                <div className="public__logo-mark">C</div>
                <span className="public__brand">CRM Platform</span>
            </header>

            <main className="public__main">
                <span className="public__eyebrow">
                    <span className="public__eyebrow-dot"></span>
                    Live System
                </span>
                <h1 className="public__title">
                    Customer Relationship<br />
                    <span>Management</span>
                </h1>
                <p className="public__subtitle">
                    A production-grade platform for managing teams, tasks, and customer relationships — built with security and scalability in mind.
                </p>
            </main>

            <footer className="public__footer">
                <Link to="/login" className="public__cta">
                    Employee Login →
                </Link>
            </footer>
        </section>
    )
    return content
}

export default Public