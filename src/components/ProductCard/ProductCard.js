import React,{useState} from "react";
import './ProductCard.css'

const ProductCard = () => {
    const [color,setColor]= useState("blue")
    const handleColorOption = (event) =>{
      if(event.target.classList.contains('circle')){
        console.log(event.target.id)
        setColor(event.target.id)
      }
    }
  return (
    <div className="product-card">
      <div className="logo-cart">
        <img
          src="https://fadzrinmadu.github.io/hosted-assets/animated-product-card-using-html-css-and-javascript/logo.jpg"
          alt="logo"
        />
        <i className="bx bx-shopping-bag"></i>
      </div>
      <div className="main-images">
        <img
          id="blue"
          className={`blue ${color === "blue" ? "active" : ""}`}
          src="https://fadzrinmadu.github.io/hosted-assets/animated-product-card-using-html-css-and-javascript/blue.png"
          alt="blue"
        />
        <img
          id="pink"
          className={`pink ${color === "pink" ? "active" : ""}`}
          src="https://fadzrinmadu.github.io/hosted-assets/animated-product-card-using-html-css-and-javascript/pink.png"
          alt="pink"
        />
        <img
          id="yellow"
          className={`yellow ${color === "yellow" ? "active" : ""}`}
          src="https://fadzrinmadu.github.io/hosted-assets/animated-product-card-using-html-css-and-javascript/yellow.png"
          alt="yellow"
        />
      </div>
      <div className="shoe-details">
        <span className="shoe_name">ADDIDAS GAZE ZX</span>
        <p>
          Lorem ipsum dolor sit lorenm i amet, consectetur adipisicing elit.
          Eum, ea, ducimus!
        </p>
        <div className="stars">
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
          <i className="bx bx-star"></i>
        </div>
      </div>
      <div className="color-price">
        <div className="color-option" onClick={handleColorOption}>
          <span className="color">Colour:</span>
          <div className="circles">
            <span
              className={`circle blue ${color === "blue" ? "active" : ""}`}
              id="blue"
            ></span>
            <span
              className={`circle pink ${color === "pink" ? "active" : ""}`}
              id="pink"
            ></span>
            <span
              className={`circle yellow ${color === "yellow" ? "active" : ""}`}
              id="yellow"
            ></span>
          </div>
        </div>
        <div className="price">
          <span className="price_num">$09.00</span>
          <span className="price_letter">Nine dollar only</span>
        </div>
      </div>
      <div className="button">
        <div className="button-layer"></div>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
