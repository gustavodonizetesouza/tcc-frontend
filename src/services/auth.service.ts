import { Injectable } from "@angular/core";
import { Credenciais } from "../models/credenciais";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";
import { LocalUser } from "../models/localuser";
import { StorageService } from "./storage.service";
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {

    jwtH: JwtHelper = new JwtHelper();

    constructor(
        public http: HttpClient, 
        public storage: StorageService) {
    }

    authenticate(creds : Credenciais) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/login`, 
            creds,
            {
                observe: 'response',
                responseType: 'text'
            });
    }

    refreshToken() {
        return this.http.post(
            `${API_CONFIG.baseUrl}/auth/refresh_token`, 
            {},
            {
                observe: 'response',
                responseType: 'text'
            });
    }

    successfulLogin(authorizationValue: string){
        let tok = authorizationValue.substring(7);
        let user: LocalUser = {
            token: tok,
            email: this.jwtH.decodeToken(tok).sub
        };
        this.storage.set(user);
    }

    logout(){
        this.storage.set(null);
    }
}