import { FormGroup, FormControl, Validators } from '@angular/forms';

export class Credencial{
    constructor(
        public usuario: string,
        public senha: string
    ){
        this.usuario = usuario;
        this.senha = senha;
    }
}

export class AuthResponse{
    public auth: Boolean;
    public sessaoId: string;
    public usuario: any; 
    public erro: string;
}

export class FormCredencial extends FormGroup{

    constructor(credencial: Credencial){
        super({
            usuario: new FormControl(credencial.usuario,[Validators.required]),
            senha: new FormControl(credencial.senha,[Validators.required])
        })
    }

}