function Buttons({categories, onClick}){
    return <div className="buttons-container">
        {categories.map((cat, index) => (
            <button key={index} onClick={() => onClick(cat)}>
                {cat}

            </button>
        ))}

    </div>
}
export default Buttons;