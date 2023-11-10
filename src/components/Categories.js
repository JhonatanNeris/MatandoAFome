import React from 'react'

//Import do CSS
import "./Categories.css"

const Categories = () => {
    
  return (
    <div className='categories'>
        <div className="containerCategories">
            <div className="card">
                <div className="imageCard">
                    <img className="image" src="https://i.pinimg.com/originals/45/eb/98/45eb98c8637d591a1bde451eb1bce941.png" alt="pizza" />

                </div>
                <div className="nameCard">
                    <p>Pizza</p>
                </div>
            </div>
            <div className="card">
                <div className="imageCard">
                    <img className="image" src="https://static.vecteezy.com/system/resources/previews/021/952/451/original/tasty-hamburger-on-transparent-background-png.png" alt="pizza" />

                </div>
                <div className="nameCard">
                    <p>Hamburguer</p>
                </div>
            </div>
            <div className="card">
                <div className="imageCard">
                    <img className="image" src="https://png.pngtree.com/png-clipart/20230423/original/pngtree-hot-dog-grill-with-mustard-isolated-png-image_9080663.png" alt="pizza" />

                </div>
                <div className="nameCard">
                    <p>Cahorro-quente</p>
                </div>
            </div>
            <div className="card">
                <div className="imageCard">
                    <img className="image" src="https://static.vecteezy.com/system/resources/previews/008/496/428/non_2x/3d-ice-cream-object-with-transparent-background-png.png" alt="pizza" />

                </div>
                <div className="nameCard">
                    <p>Sorvete</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Categories