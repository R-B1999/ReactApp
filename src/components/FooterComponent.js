import React from 'react';

export const Footer = () => {
    return (
        <div className="bg-light shadow">
            <hr />
            <div className="container footer">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div class="social-network social-circle">
                            <a href="#" class="icoFacebook mx-2" title="Facebook"><i class="fa fa-facebook"></i></a>
                            <a href="#" class="icoTwitter mx-2" title="Twitter"><i class="fa fa-twitter"></i></a>
                            <a href="#" class="icoGoogle mx-2" title="Google +"><i class="fa fa-google"></i></a>
                            <a href="#" class="icoLinkedin mx-2" title="Linkedin"><i class="fa fa-linkedin"></i></a>
                            <a href="#" class="icoInstagram mx-2" title="Instagram"><i class="fa fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 order-md-first">
                        <p className="py-2">© Copyright 2021 | COMIDA RÁPIDA</p>
                    </div>
                </div>
            </div>
        </div>
    )
}