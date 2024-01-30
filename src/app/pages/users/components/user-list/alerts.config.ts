import { AlertModel } from "src/app/core/models/alert.model";

export const ERROR_ALERT: AlertModel = {
    title: 'Erro ao listar os usuários',
    description: 'Desculpe, ocorreu um erro inesperado. Por favor, tente novamente mais tarde.',
    context: 'danger'
};

export const SUCCESS_ALERT: AlertModel = {
    title: 'Deu certo!',
    description: 'Usuário encontrado com sucesso.',
    context: 'success'
};

export const NOT_FOUND_USER_ALERT: AlertModel = {
    title: 'Erro ao listar os usuários',
    description: 'Desculpe, ocorreu um erro inesperado ou nenhum usuário foi encontrado.',
    context: 'danger'
};
