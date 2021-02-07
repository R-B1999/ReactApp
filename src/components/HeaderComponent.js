import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {

    const mystyle = {
        background: "url('/public/assets/images/background.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed"
    }

    return (
        <div className="banner" style={mystyle}>
            <div className="banner__content">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-11 col-md-9 col-lg-6 col-xl-5">
                            <div className="banner__text shadow">
                                <h3>Sedersi o portare via</h3>
                                <h1>COMIDA RÁPIDA</h1>
                                <p>If you have too, today’s your lucky day. Because I made this for you so that you never have to feel that frustration or waste that time again</p>
                            </div>
                            <Link to="ReactApp/menu" className="btn btn-lg __link">Order Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
