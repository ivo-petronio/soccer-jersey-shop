const Bag = ({itemsInBag}) => {

    const getTotal = () => {
        let orderTotal = 0
        itemsInBag.forEach( item => orderTotal += item.price * item.quantity)
        return orderTotal.toFixed(2)
    }

    return (
        <>
            <section className="summary">
                <strong>Order Details</strong>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            itemsInBag.map( item => {
                                return (
                                    <tr>
                                        <td>{item.quantity}x {item.name}</td>
                                        <td>$ {(item.quantity * item.price).toFixed(2)} </td>
                                    </tr>
                                )
                            })
                        }

                                < tr >
                                    <th>Total</th>
                                    <th>$ {getTotal()} </th>
                                </tr>
                </tbody>
            </table>
        </section >
        </>
    )
}

export default Bag