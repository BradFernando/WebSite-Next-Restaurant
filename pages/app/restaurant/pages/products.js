import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from "react";

export default function Products() {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const toggleItem = (btn, itemId, price) => {
    let item = items.find(i => i.id === itemId);
    if (!item) {
        let newItem = { id: itemId, price: price};
        setItems([...items, newItem]);
        setTotalPrice(totalPrice + price);
        btn.classList.add('added-to-cart');
        btn.innerText = "Eliminar del carrito";
    } else {
        let newItems = items.filter(i => i.id !== itemId);
        setItems(newItems);
        setTotalPrice(totalPrice - price);
        btn.classList.remove('added-to-cart');
        btn.innerText = "Añadir al carrito";
    }
  };

  useEffect(() => {
    const buttons = Array.from(document.querySelectorAll('.btn'));
    buttons.forEach(button => {
      const itemId = button.parentElement.id;
      const price = Number(button.previousElementSibling.textContent.replace('Costo: ', ''));
      button.addEventListener('click', function() {
        toggleItem(button, itemId, price);
      });
    });

    // Load Telegram script
    const script = document.createElement('script');
    script.src = "https://telegram.org/js/telegram-web-app.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [toggleItem]);

  return (
      <div>
        <Head>
          <title>Establecimiento Gastronómico</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>

        <h1>Establecimiento Gastronómico</h1>
        <div className="center">
          <div className="container">
            <div className="inner">
              <div className="item" id="item1">
                <Image className="img"
                       src="https://res.cloudinary.com/ddafrj6z7/image/upload/v1713394772/hamburguesa_eiqehc.png"
                       alt=" "
                       width={300} height={150}/>
                <p>Costo: 1500</p>
                <button className="btn" id="btn1">Añadir al Carrito</button>
              </div>

              <div className="item" id="item2">
                <Image className="img"
                       src="https://res.cloudinary.com/ddafrj6z7/image/upload/v1713394680/tostada-francesa_gxqaqy.png"
                       alt="" width={300} height={150}/>
                <p>Costo: 2000</p>
                <button className="btn" id="btn2">Añadir al Carrito</button>
              </div>

              <div className="item" id="item3">
                <Image className="img"
                       src="https://res.cloudinary.com/ddafrj6z7/image/upload/v1713394911/papas-fritas_cs4vm9.png"
                       alt=""
                       width={300} height={150}/>
                <p>Costo: 2500</p>
                <button className="btn" id="btn3">Añadir al Carrito</button>
              </div>

              <div className="item" id="item4">
                <Image className="img"
                       src="https://res.cloudinary.com/ddafrj6z7/image/upload/v1713230882/cubiertos_sngmql.png" alt=""
                       width={300} height={150}/>
                <p>Costo: 2200</p>
                <button className="btn" id="btn4">Añadir al Carrito</button>
              </div>

              <div className="item" id="item5">
                <Image className="img"
                       src="https://res.cloudinary.com/ddafrj6z7/image/upload/v1713394613/taza_ih35fu.png" alt=""
                       width={300} height={150}/>
                <p>Costo: 2100</p>
                <button className="btn" id="btn5">Añadir al Carrito</button>
              </div>

              <div className="item" id="item6">
                <Image className="img"
                       src="https://res.cloudinary.com/ddafrj6z7/image/upload/v1713394542/pollo-frito_hg5go6.png" alt=""
                       width={300} height={150}/>
                <p>Costo: 5000</p>
                <button className="btn" id="btn6">Añadir al Carrito</button>
              </div>

              <div className="item" id="item7">
                <Image className="img"
                       src="https://res.cloudinary.com/ddafrj6z7/image/upload/v1713394475/sopa-de-pescado_knht05.png"
                       alt="" width={300} height={150}/>
                <p>Costo: 6000</p>
                <button className="btn" id="btn7">Añadir al Carrito</button>
              </div>

              <div className="item" id="item8">
                <Image className="img"
                       src="https://res.cloudinary.com/ddafrj6z7/image/upload/v1713394350/pollo-al-curry_owjkz2.png"
                       alt="" width={300} height={150}/>
                <p>Costo: 1600</p>
                <button className="btn" id="btn8">Añadir al Carrito</button>
              </div>
            </div>
          </div>
        </div>

        {totalPrice > 0 && (
            <button className="total-button">
              Total a pagar: {totalPrice}
            </button>
        )}

      </div>
  );
}