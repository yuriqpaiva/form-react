import { Typography, Stepper, Step, StepLabel } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import { useEffect } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

function FormularioCadastro({ aoEnviar }) {
    const [etapaAtual, setEtapaAtual] = useState(0)
    const [dadosColetados, setDados] = useState({})

    // useEffect funciona com as funções do ciclo de vida do class Component
    useEffect(() => {
        if (etapaAtual === formulario.length - 1) {
            aoEnviar(dadosColetados)
        }
    })

    const formulario = [
        <DadosUsuario aoEnviar={coletarDados} />,
        <DadosPessoais aoEnviar={coletarDados} />,
        <DadosEntrega aoEnviar={coletarDados} />,
        <Typography variant='h5'>Obrigado pelo Cadastro!</Typography>
    ];

    function coletarDados(dados) {
        setDados({ ...dadosColetados, ...dados })    // O setState é assíncrono
        proximo()
    }

    function proximo() {
        setEtapaAtual(etapaAtual + 1)
    }

    return (
        <Fragment>
            <Stepper activeStep={etapaAtual}>
                <Step>
                    <StepLabel>Login</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Pessoal</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Entrega</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Finalização</StepLabel>
                </Step>
            </Stepper>
            {formulario[etapaAtual]}
        </Fragment>
    )
}

// O switch não é suportado pelo JSX (dentro do return do componente)
// Para isso, criamos uma função fora do componente

export default FormularioCadastro