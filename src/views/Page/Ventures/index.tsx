import {
    ScaleFade,
} from "@chakra-ui/react";

import * as S from './styles';

export default function Ventures() {
    return (
        <S.Container>
            <div className="ventures">
                <ScaleFade initialScale={0.1} in={true}>
                    <div className="ventures-container">
                        <div className="ventures-header">
                            <span className="title">
                                Comming Soon
                            </span>
                        </div>
                        <div className="ventures-body">
                            <img src="Images/Logo/logo1.png" style={{width:'150px'}} />
                        </div>                                                
                    </div>
                </ScaleFade>
            </div>
        </S.Container>
    )
}
