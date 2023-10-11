const MakeRequestLink = () => {
    // Ideally, clicking on this link should re-direct user to a different page.
    // Using javascript:void(0) as placeholder and to mitigate page refresh.
    return (
        <span>
            <a href='javascript:void(0)'>Make a request</a>
        </span>
    )
}

const Header = ({ title, description }) => {
    return (
        <section className='select-db-page-header'>
            <h2 style={{ marginBottom: 12 }}>{title}</h2>
            <h4 style={{ margin: 0, fontWeight: 'normal' }}>
                {description}
                <MakeRequestLink />
            </h4>
        </section>
    )
}

export default Header;