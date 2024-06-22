

const Filters = () => {
    return (
        <section className="filters">
            <div>
                <label htmlFor="price">Price</label>
                <input
                    type="range"
                    id="price"
                    min='0'
                    max='1000'
                ></input>
            </div>

            <div>
                <label htmlFor="category">Categoria</label>
                <select id='category'>
                    <option value='all'>Todas</option>
                    <option value='beauty'>Belleza</option>
                    <option value='fragrances'>Perfumes</option>
                    <option value='furniture'>Muebles</option>
                    <option value='groceries'>Comestibles</option>
                </select>
            </div>
        </section>
    )
};

export default Filters;
