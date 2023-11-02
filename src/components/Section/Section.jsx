
export const Section = ({ title, children  }) => {
    return (
        <>
            <h2 className="header">{title}</h2>
            {children}
        </>
    )
}
