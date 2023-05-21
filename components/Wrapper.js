function Wrapper(props) {
    return (
        <div className="min-w-0 max-w-4xl mx-auto">
            {props.children}
        </div>
    )
}
export default Wrapper;