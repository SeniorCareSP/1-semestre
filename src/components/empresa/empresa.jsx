import Style from "./empresa.module.css"
import React from "react";
function Empresa() {
    return (
        <div className={Style["empresa"]}>
            <h2>Nós da Senior Care somos uma</h2>
            <div>
                <span className={Style["linha"]}></span>
                <h1>Empresa</h1>
                <span className={Style["linha"]}></span>
            </div>
            <div className={Style["descricao"]}>
                <p>
                    Comprometida em atender às necessidades crescentes de uma população que envelhece rapidamente. Em um mundo onde encontrar cuidadores confiáveis para os nossos entes queridos se tornou uma necessidade crucial, assumimos a responsabilidade de oferecer não apenas assistência, mas também conforto e confiança. A Senior Care não é apenas uma empresa; é uma promessa de qualidade, segurança e tranquilidade para sua família. Estamos aqui para garantir que seus entes queridos recebam o cuidado atencioso e dedicado que merecem.
                </p>
            </div>
        </div>
    );
}

export default Empresa;