import store from "../Config/store/store"
import { LoginFirebase, signInWithGoogle } from "../Config/firebase/auth"
import { AddTipoAtivo, SetTiposAtivos } from "../Config/store/actions/TiposAtivosActions"
import { SetSetores } from "../Config/store/actions/SetoresActions"
import { SetTiposUsuarios } from "../Config/store/actions/TiposUsuariosActions"
import { SetLocaisArmazenamento } from "../Config/store/actions/LocaisArmazenamentoActions"
import { SetStatusAtivos } from "../Config/store/actions/AtivosStatusActions"
import { SetTiposDeUso } from "../Config/store/actions/TiposDeUsoActions"
import { SetAtivos } from "../Config/store/actions/AtivosActions"
import { AddUsuarioAction, SetUsuarios } from "../Config/store/actions/UsuariosActions"
import { PermitIndexs } from "../GlobalVars"


export const LoginUtil = (email, password) => {
    return LoginFirebase(email, password)
}


export const LogarComGooglePopup = () => {
    return signInWithGoogle();
};


export const saveFunctions = {
    "TiposAtivos": SaveTipos,
    "Setores": SaveSetores,
    "TiposUsuarios": SaveUserTipos,
    "Locais": SaveLocaisArmazenamento,
    "StatusAtivos": SaveStatusAtivos,
    "TiposUso": SaveTiposDeUso
};


// Define um objeto de mapeamento que relaciona o nome do módulo/prop com a função get correspondente
export const fetchFunctions = {
    TiposAtivos: GetTipos,
    Setores: GetSetores,
    TiposUsuarios: GetUserTipos,
    Locais: GetLocaisArmazenamento,
    StatusAtivos: GetStatusAtivos,
    TiposUso: GetTiposDeUso
};


//////////// TIPOS ATIVOS //////////////////

export async function GetTipos(gerarErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                if (localStorage.getItem('AssetSenseTipos'))
                    resolve(JSON.parse(localStorage.getItem('AssetSenseTipos')))
                else
                    resolve([])
            }
        }, 50);
    });
}


export async function SaveTipos(Tipos, gerarErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                ////console.log(Tipos)
                localStorage.setItem('AssetSenseTipos', JSON.stringify(Tipos))
                store.dispatch(SetTiposAtivos(Tipos))
                resolve('Ok');
            }
        }, 50);
    });
}


export async function AddTipo(TipoAtivo) {
    store.dispatch(AddTipoAtivo(TipoAtivo))
}




//////////// SETORES //////////////////

export async function GetSetores(gerarErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                if (localStorage.getItem('AssetSenseSetores'))
                    resolve(JSON.parse(localStorage.getItem('AssetSenseSetores')))
                else
                    resolve([])
            }
        }, 50);
    });
}


export async function SaveSetores(Setores, gerarErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                ////console.log(Setores)
                localStorage.setItem('AssetSenseSetores', JSON.stringify(Setores))
                store.dispatch(SetSetores(Setores))
                resolve('Ok');
            }
        }, 50);
    });
}

export async function GetSetoresSelect(gerarErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                if (localStorage.getItem('AssetSenseSetores')) {
                    const Types = JSON.parse(localStorage.getItem('AssetSenseSetores')).map((item) => {
                        return {
                            value: item.Id,
                            label: item.Value,
                        };
                    });
                    Types.push({ value: 'Todos', label: 'Todos' })
                    resolve(Types)
                }

                else
                    resolve([])
            }
        }, 5);
    });
}



//////////// TIPOS USUARIOS //////////////////

export async function GetUserTipos(gerarErro = false) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                if (localStorage.getItem('AssetSenseUsersTypes')) {
                    resolve(JSON.parse(localStorage.getItem('AssetSenseUsersTypes')))
                    ////console.log("TIPOS", JSON.parse(localStorage.getItem('AssetSenseUsersTypes')))
                }

                else
                    resolve([])
            }
        }, 50);
    });
}


export async function SaveUserTipos(Tipos, gerarErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                ////console.log(Tipos)
                localStorage.setItem('AssetSenseUsersTypes', JSON.stringify(Tipos))
                store.dispatch(SetTiposUsuarios(Tipos))
                resolve('Ok');
            }
        }, 50);
    });
}

export async function GetUsersTypesSelect(gerarErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                if (localStorage.getItem('AssetSenseUsersTypes')) {

                    const Types = JSON.parse(localStorage.getItem('AssetSenseUsersTypes')).map((item) => {
                        return {
                            value: item.Id,
                            label: item.Value,
                        };
                    });
                    //console.log(Types)
                    Types.push({ value: 'Todos', label: 'Todos' })
                    resolve(Types)
                }

                else
                    resolve([])
            }
        }, 5);
    });
}












//////////// LOCAIS //////////////////

export async function GetLocaisArmazenamento(gerarErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                if (localStorage.getItem('AssetSenseLocaisArmazenamento'))
                    resolve(JSON.parse(localStorage.getItem('AssetSenseLocaisArmazenamento')))
                else
                    resolve([])
            }
        }, 50);
    });
}


export async function SaveLocaisArmazenamento(Locais, gerarErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                ////console.log(Locais)
                localStorage.setItem('AssetSenseLocaisArmazenamento', JSON.stringify(Locais))
                store.dispatch(SetLocaisArmazenamento(Locais))
                resolve('Ok');
            }
        }, 50);
    });
}








//////////// STATUS ATIVOS //////////////////

export async function GetStatusAtivos(gerarErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                if (localStorage.getItem('AssetSenseStatusAtivos'))
                    resolve(JSON.parse(localStorage.getItem('AssetSenseStatusAtivos')))
                else
                    resolve([])
            }
        }, 50);
    });
}


export async function SaveStatusAtivos(Locais, gerarErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                ////console.log(Locais)
                localStorage.setItem('AssetSenseStatusAtivos', JSON.stringify(Locais))
                store.dispatch(SetStatusAtivos(Locais))
                resolve('Ok');
            }
        }, 50);
    });
}




//////////// TIPOS DE USO  //////////////////

export async function GetTiposDeUso(gerarErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                if (localStorage.getItem('AssetSenseTiposDeUso'))
                    resolve(JSON.parse(localStorage.getItem('AssetSenseTiposDeUso')))
                else
                    resolve([])
            }
        }, 50);
    });
}


export async function SaveTiposDeUso(Locais, gerarErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                ////console.log(Locais)
                localStorage.setItem('AssetSenseTiposDeUso', JSON.stringify(Locais))
                store.dispatch(SetTiposDeUso(Locais))
                resolve('Ok');
            }
        }, 50);
    });
}




////////////////////// ATIVOS //////////////////////////


export async function GetAtivos(gerarErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                if (localStorage.getItem('AssetSenseAtivos'))
                    resolve(JSON.parse(localStorage.getItem('AssetSenseAtivos')))
                else
                    resolve([])
            }
        }, 5);
    });
}



export async function SaveAtivos(Ativos, gerarErro = false) {
    return new Promise((resolve, reject) => {

        if (gerarErro) {
            reject(new Error('Erro ao obter dados'));
        } else {
            ////console.log(Ativos)
            localStorage.setItem('AssetSenseAtivos', JSON.stringify(Ativos))
            store.dispatch(SetAtivos(Ativos))
            //console.log("Command Save ATIVOS")
            resolve('Ok');
        }

    });
}


////////////////////// ATIVOS //////////////////////////












////////////////////// USUARIOS  //////////////////////////
export async function GetUsers(gerarErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                if (localStorage.getItem('AssetSenseUsers'))
                    resolve(JSON.parse(localStorage.getItem('AssetSenseUsers')))
                else
                    resolve([])
            }
        }, 5);
    });
}


export async function SaveUsers(Users, gerarErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                ////console.log(Users)
                localStorage.setItem('AssetSenseUsers', JSON.stringify(Users))
                store.dispatch(SetUsuarios(Users))
                resolve('Ok');
            }
        }, 50);
    });
}

export async function AddUser(User, gerarErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                ////console.log(Users)
                //localStorage.setItem('AssetSenseUsers', JSON.stringify(Users))
                store.dispatch(AddUsuarioAction(User))
                resolve('Ok');
            }
        }, 50);
    });
}



export async function EditUser(EditedUser, gerarErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                GetUsers().then(Lista => {



                    const NewUsers = Lista.filter(usuario => {
                        return usuario.Id !== EditedUser.Id
                    }).concat(EditedUser)

                    SaveUsers(NewUsers)
                    console.log(NewUsers)
                    resolve('Ok');
                })
                //store.dispatch(EditUsuarioAction(EditedUser))
            }
        }, 50);
    });
}

////////////////////// USUARIOS  //////////////////////////











/////////////////////// TEMA //////////////////



export async function GetTema() {
    if (!localStorage.getItem('AssetSenseTema'))
        localStorage.setItem('AssetSenseTema', 'Claro')
}


export async function ToggleTema() {
    const TEMA = localStorage.getItem('AssetSenseTema')
    if (TEMA === 'Escuro')
        localStorage.setItem('AssetSenseTema', 'Claro')
    if (TEMA === 'Claro')
        localStorage.setItem('AssetSenseTema', 'Escuro')

}





// GETTERS DA STORE /////

export const GetCurrentUserEmailFromStore = () => {
    return store.getState().LoggedUser.Email
}

export const GetUserTypesFromStore = () => {
    return store.getState().TiposUsuarios
}

export const GetSetoresFromStore = () => {
    return store.getState().Setores
}
export const GetUsersFromStore = () => {
    return store.getState().Usuarios
}

export const GetCurrentUserTypeFromStore = () => {
    const Email = GetCurrentUserEmailFromStore()
    const Users = GetUsersFromStore()
    const Types = GetUserTypesFromStore()
    const CurrentUser = Users.find(U => U.Email === Email)
    const CurrentUserType = Types.find(U => U.Id === CurrentUser.Type.Id)
    return CurrentUserType
}


export const GetCurrentUserTypeWithIdFromStore = (Id) => {
    const Types = GetUserTypesFromStore()
    const Type = Types.find(U => U.Id === Id)
    return Type
}




export const GetCurrentUserSetorNameWithIdFromStore = (Id) => {
    if (!Id) return 'Selecione um Setor'
    const Setores = GetSetoresFromStore()
    const Name = Setores.find(Setor => Setor.Id === Id).Value
    return Name
}
export const GetCurrentUserTypeNameWithIdFromStore = (Id) => {
    if (!Id) return 'Selecione um Tipo de Usuário'
    const Types = GetUserTypesFromStore()
    const Name = Types.find(Type => Type.Id === Id).Value
    return Name
}




export const GetCurrentUserFromStore = () => {
    const Email = GetCurrentUserEmailFromStore()
    const Users = GetUsersFromStore()
    const CurrentUser = Users.find(U => U.Email === Email)
    return CurrentUser
}

export const GetUserWithIdFromStore = (Id) => {
    const Users = GetUsersFromStore()
    const User = Users.find(U => U.Id === Id)
    return User
}


export const GetCurrentUserTypePermitFromStore = (Permit) => {
    const CurrentUserType = GetCurrentUserTypeFromStore()
    return CurrentUserType.Permits[PermitIndexs[Permit]]
}


