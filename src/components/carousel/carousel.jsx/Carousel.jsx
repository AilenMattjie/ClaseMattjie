import React from "react";

const Carousel = () =>{
    return (
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i.pinimg.com/564x/71/68/de/7168de8a95cd73f8c0581d584e0fc769.jpg" className="d-block w-100" alt="carousel1"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.pinimg.com/564x/a6/67/c0/a667c009b581eff1f60728ea3811e85f.jpg" className="d-block w-100" alt="carousel2"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.pinimg.com/564x/54/b0/93/54b093ad7ea0a54023944f0784488f9a.jpg" className="d-block w-100" alt="carousel3"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel