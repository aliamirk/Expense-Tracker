function Wrapper(props) {
    return (
        <div className=" border-2 border-slate-800 p-4 mt-8 rounded-xl bg-slate-800 min-w-0 max-w-4xl mx-auto">
            {props.children}
        </div>
    )
}
export default Wrapper;