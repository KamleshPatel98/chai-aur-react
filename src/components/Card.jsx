function Card(props) {
    console.log(props)
    return (
        <>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                <div className="rounded-xl shadow-xl bg-green-200 text-black p-6">
                    <h2 className="text-xl font-bold">{props.title}</h2>
                    <p>{props.description}</p>
                    <p className="text-black text-sm">
                        {props.dateTime.date} | {props.dateTime.time}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Card