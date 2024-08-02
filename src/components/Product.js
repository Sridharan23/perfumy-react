import one from "../assets/images/one.jpg"
import two from "../assets/images/two.jpg"
import three from "../assets/images/three.jpg"


function Product() {
    return (
      <div className="product">
        <div className="box">
          <img src={one} alt=" Not found"></img>
          <p>Chrome is classified as a sharp fruity fragrance. This masculine scent possesses a blend of crisp tangy citrus. It is recommended for daytime wear.</p>
        </div>
        <div className="box">
          <img src={two} alt="Not found"></img>
          <p>Chrome is classified as a sharp fruity fragrance. This masculine scent possesses a blend of crisp tangy citrus. It is recommended for daytime wear.</p>
        </div>
        <div className="box">
          <img src={three} alt=" Not found"></img>
          <p>Chrome is classified as a sharp fruity fragrance. This masculine scent possesses a blend of crisp tangy citrus. It is recommended for daytime wear.</p>
        </div>
      </div>
    )
  }


  export default Product