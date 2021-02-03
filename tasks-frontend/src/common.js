import { Platform, Alert } from 'react-native'

const server = Platform.OS === 'ios' ? 'http://localhost:3333' : 'http://192.168.1.13:3333'

function showError(err){
    if(err.response && err.response.data){
        Alert.alert('Ops! Ocorreu um Ploblema!', `Menssagem: ${err.response.data}`)
    }else{
        Alert.alert('Ops! Ocorreu um Ploblema!', `Menssagem: ${err} envie um ticket para o suporte`)
    }
}

function showSuccess(msg){
    Alert.alert('Sucesso!', msg)
}

export { server, showError, showSuccess } 