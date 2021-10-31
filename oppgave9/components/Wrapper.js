export default function Wrapper( {id, className, children} ) {

    return (
        <section id={id} className={className}>
            {children}
        </section>
    )
}