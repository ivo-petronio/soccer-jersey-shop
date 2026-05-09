import './App.css';
import Bag from './components/Bag.jsx'
import Item from './components/Item.jsx'
import { useState } from 'react'

function App() {

    const [items, setItems] = useState([
        {

            id: 1,
            photo: "real_madrid.webp",
            name: "Real Madrid",
            price: 119.99,
            active: false,
            quantity: 1,
            isInBag: false
        },
        {
            id: 2,
            photo: "milan.png",
            name: "Milan",
            price: 99.99,
            active: false,
            quantity: 1,
            isInBag: true
        },
        {
            id: 3,
            photo: "chelsea.webp",
            name: "Chelsea",
            price: 99.99,
            active: false,
            quantity: 1,
            isInBag: false
        },
        {
            id: 4,
            photo: "barcelona.png",
            name: "Barcelona",
            price: 109.99,
            active: false,
            quantity: 1,
            isInBag: false
        },
        {
            id: 5,
            photo: "benfica.png",
            name: "Benfica",
            price: 89.49,
            active: false,
            quantity: 1,
            isInBag: false
        },
        {
            id: 6,
            photo: "manchester.webp",
            name: "Manchester City",
            price: 129.79,
            active: false,
            quantity: 1,
            isInBag: false
        },
        {
            id: 7,
            photo: "bayern.webp",
            name: "Bayern",
            price: 119.99,
            active: false,
            quantity: 1,
            isInBag: false
        },
        {
            id: 8,
            photo: "psg.png",
            name: "PSG",
            price: 94.99,
            active: false,
            quantity: 1,
            isInBag: false
        },
        {
            id: 9,
            photo: "ajax.webp",
            name: "Ajax",
            price: 89.99,
            active: false,
            quantity: 1,
            isInBag: true
        }
    ])

    const itemsInBag = items.filter( item => item.isInBag )

    const selectProductHandler = id => {
        setItems(items.filter( item => {
            if (item.id === id) item.isInBag = !item.isInBag
            return item
        }))
    }

    const increaseQuantity = ( id, operator, event ) => {
        event.stopPropagation()
        setItems(items.filter( item => {
            if (item.id === id ) item.quantity += operator
            return item
        }))
    }

    return (
        <>
            <section className="items">
                <h4>Jersey Shop Made with React JS</h4>

                {
                    items.map(item => 
                        <Item
                            /* NÃO DÁ PARA COLOCAR O ONCLICK FORA, TEM QUE SER DENTRO DO COMPONENTE.
                                FAZEMOS ISSO PASSANDO UMA FUNÇÃO COMO PROP.
                            onClick={ () => alert("Clicou") } */
                            selectProduct={ id => selectProductHandler(id) }
                            moreOneTshirt={ (id, operator, event) => increaseQuantity(id, operator, event) }
                            key={item.id}
                            item={item}
                        />
                    )
                }
            </section>

            {
                itemsInBag.length > 0 && <Bag />
            }

        </>
    );
}

export default App
