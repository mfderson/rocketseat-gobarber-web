import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    /* Pega o name, email e o restante das informações que vem no payload, guarda
     * em uma variável que se chama rest */
    const { name, email, ...rest } = payload.data;

    /* Object.assign serve para unir dois objetos */
    const profile = { name, email, ...(rest.oldPassword ? rest : {}) };

    // Faz a chamada a api
    const response = yield call(api.put, 'users', profile);

    toast.success('Perfil atualizado com sucesso!');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao atualizar perfil, confira seus dados!');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
