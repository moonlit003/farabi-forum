interface Person {
    name?: string;
    desc?: string;
    imglink: string;
}

export function PeopleCard({imglink, name, desc}: Person) {
    return (
        <div className="rounded-lg ring-1 ring-gray-300 shadow-lg p-6 bg-white flex flex-col justify-center items-center hover:shadow-xl transition-shadow duration-300">
            <img className="h-32 w-32 rounded-full object-cover ring-2 ring-gray-200 mb-4" src={imglink} alt={name} />
            <h2 className="text-xl font-semibold text-center mb-2">{name}</h2>
            {desc && <p className="text-center text-gray-700">{desc}</p>}
        </div>
    )
}