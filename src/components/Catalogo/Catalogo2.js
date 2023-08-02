

export function Anchetas ({ anchetas }) {
    return (
        <main className="products">
            <ul>
                {anchetas.map(ancheta => {
                    <li key={ancheta.id}>
                        <img src={ancheta.image}
                        alt={ancheta.NombreAncheta}
                        />
                        <div>
                            <strong>{ancheta.NombreAncheta}</strong>
                        </div>
                        <div>
                            <button>AÑADIR AL CARRITO</button>
                        </div>
                    </li>
                })}
            </ul>
        </main>
    )
}