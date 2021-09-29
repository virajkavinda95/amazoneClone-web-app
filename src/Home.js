import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container"> 
                <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/All_Or_Nothing_Tottenham_Hotspur_S1/AONT_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB406302419_.jpg" className="home__image" alt="banner_home" />

                <div className="home__row">
                    <Product
                    key="1"
                    id="125356" 
                    title="SAMSUNG 55-Inch Class QLED Q80A Series - 4K UHD Direct Full Array Quantum HDR 12x Smart TV with Alexa Built-in (QN55Q80AAFXZA, 2021 Model)"
                    price={169.90}
                    image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6247/6247254_sd.jpg;maxHeight=640;maxWidth=550"
                    rating={5}/>

                    <Product
                    key="2"
                    id="1256759" 
                    title="All-New Toshiba 50-inch 50C350KU C350 Series LED 4K UHD Smart Fire TV, Released 2021"
                    price={369.99}
                    image="https://m.media-amazon.com/images/I/81hfMSQ47sL._AC_SL1500_.jpg"
                    rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                    key="3"
                    id="1235365" 
                    title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
                    price={269.99}
                    image="https://www.ubuy.com.lk/productimg/?image=aHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzYxLVBibFludHNMLl9TUzQwMF8uanBn.jpg"
                    rating={3}
                    />

                    <Product
                    key="4"
                    id="3226465" 
                    title="DualShock 4 Wireless Controller for PlayStation 4 - Jet Black"
                    price={59.99}
                    image="https://m.media-amazon.com/images/I/61IG46p-yHL._SX522_.jpg"
                    rating={4}
                    />

                    <Product
                    key="5"
                    id="412513" 
                    title="SAMSUNG 65-Inch Class Frame Series - 4K Quantum HDR Smart TV with Alexa Built-in (QN65LS03AAFXZA, 2021 Model)"
                    price={105.88}
                    image="https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/the-frame/ls03a/gallery/PDP-GALLERY-The-Frame-01-1600x1200.jpg?$product-details-jpg$"
                    rating={3}
                    />
                </div>

                <div className="home__row">
                    <Product
                    key="6"
                    id="4544554" 
                    title="Samsung UN78KS9500 Curved 78-Inch 4K Ultra HD Smart LED TV (2016 Model)"
                    price={220.88}
                    image="https://gooboli.com/wp-content/uploads/2017/01/7N5Q8M6Y_1_irve.jpg"
                    rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
