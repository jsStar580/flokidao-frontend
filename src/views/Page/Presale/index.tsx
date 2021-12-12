import { ScaleFade } from "@chakra-ui/react";

export default function Presale() {
    return (
        <div className="presale">
            <ScaleFade initialScale={0.1} in={true}>
                <div className="presale-container">
                    <div className="presale-info">
                        <div className="info-item">
                            Max BUSD to deposit<br/>
                            <span className="value">$1500</span>
                        </div>
                        <div className="info-item"></div>
                        <div className="info-item">
                            Max BUSD to deposit<br/>
                            <span className="value">$200</span>
                        </div>
                    </div>
                </div>
            </ScaleFade>
        </div>
    );
}