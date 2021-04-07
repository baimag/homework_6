const {useState} = require("react");

function Heroes () {
    const deleteNames = (indexNames) => {
        const filter = names.filter((name, index) => {
            if (index === indexNames) {
                return false
            }
            return true
        })
        setNames(filter)
    }
    const [names, setNames] = useState([
        "Шерлок Холмс",
        "Доктор Ватсон",
        "Профессор Мориарти",
        "Миссис Хадсон",
        "Ирен Адлер"
    ])
    return (
        <>
            {names.map((hero, index) => {
                return (
                    <ul>
                        <li onClick={() => {deleteNames(index)}}>
                            {hero}
                        </li>
                    </ul>
                )
            })}
        </>
    )
}
export default Heroes