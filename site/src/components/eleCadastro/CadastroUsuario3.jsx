import Stack from '@mui/material/Stack';
import Style from '../../pages/cadastro/Cadastro.module.css';
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import ButtonAzul from '../botao/BotaoAzul';
import ButtonBranco from '../botao/BotaoBranco';
import Title from '../tituloCadastro/Title';
import CustomizedHook from '../Input/InpIdioma';
import api from "../../api/Usuario/apiResponsavel";
import DatePicker from '../Input/DatePicker';

function CadastroUsuario3() {
    const [idioma, setIdioma] = React.useState([]);
    const [dtNasc, setDtNasc] = React.useState('');

    const handleInputChange = (event, setStateFunction) => {
        console.log(event.target.value);
        setStateFunction(event.target.value);
    };

    const handleIdiomaChange = (event, newValue) => {
        console.log("Selected Idiomas: ", newValue);
        setIdioma(newValue);
    };

    const navigate = useNavigate();

    const handleSave = () => {
        const dadosCadastro = localStorage.getItem("cadastro");
        if (dadosCadastro) {
            const json = JSON.parse(dadosCadastro);
            json.dtNascimento = dtNasc;
            json.idiomas = idioma; 
            localStorage.setItem("cadastro", JSON.stringify(json));
            
            if (json.tipoDeUsuario === "CUIDADOR") {
                navigate("/cadastro/cuidador");
                console.log("Requisição para cadastrar cuidador");
            } else {
                api.post('', json)
                    .then(response => {
                        localStorage.clear();
                        navigate("/login");
                        console.log("Cadastro feito com sucesso!");
                    })
                    .catch(error => {
                        console.log(JSON.stringify(json));
                        console.log("Ocorreu um erro ao cadastrar, por favor, tente novamente.");
                    });
            }
        }   
    };

    React.useEffect(() => {
        console.log("Valor de idioma:", idioma);
    }, [idioma]);

    return (
        <div className={Style["card-cadastro"]}>
            <div className={Style["linha"]}></div>
            <div className={Style["content"]}>
                <Stack spacing={6}>
                    <Title />
                    <Stack spacing={3} className={Style["itens"]}>
                        <DatePicker value={dtNasc} onChange={(e) => handleInputChange(e, setDtNasc)} />
                        <CustomizedHook value={idioma} onChange={handleIdiomaChange} />
                        <ButtonAzul onClick={() => handleSave()}>Proximo</ButtonAzul>
                        <ButtonBranco onClick={() => navigate("/cadastro2")}>Voltar</ButtonBranco>
                    </Stack>
                </Stack>
            </div>
        </div>
    );
}

export default CadastroUsuario3;