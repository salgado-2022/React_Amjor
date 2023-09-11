import React from "react";
import { Divider} from "@mui/material"

function Footer() {
    return (
        <footer className="footer">
            <div className="mt-5 container">
                <div className="row">

                    <div className="col-md-6 col-lg-12">

                        <div className="block-7" style={{ marginTop: '25px'}}>
                            <Divider style={{ width: '100%', margin: '10px'}}>

                            </Divider>
                        </div>

                        <div className="block-5 mb-5">
                            
                            <div className="row">
                                <div className="col">
                                    <ul>
                                        <li className="address">Crr 53 # 43-197</li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <ul>
                                        <li className="phone"><a href="tel://23923929210">+57 563 627 37 26</a></li>

                                    </ul>
                                </div>
                                <div className="col">
                                    <ul className="list-unstyled">
                                        <li className="email">amjor@gmail.com</li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="row pt-0 mt-1 text-center">
                    <div className="col-md-12">
                        <p>
                            Copyright &copy;
                            <script
                                data-cfasync="false"
                                src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
                            ></script>
                            <script>document.write(new Date().getFullYear());</script>
                            Todos los derechos reservados | Plantilla de colorlib <i
                                className="icon-heart"
                                aria-hidden="true"
                            ></i>
                            <a
                                href="/"
                                target="_blank"
                                className="text-primary"
                            >Amjor</a>
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export { Footer }