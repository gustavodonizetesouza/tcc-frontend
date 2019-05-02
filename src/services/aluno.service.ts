import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { StorageService } from "./storage.service";
import { Observable } from "rxjs";
import { Aluno } from "../models/aluno";
import { API_CONFIG } from "../config/api.config";

@Injectable()
export class AlunoService{

    constructor(
        public http: HttpClient,
        public storage: StorageService
    ){}

    //listar todos os alunos
    buscarTodos(): Observable<Aluno>{
        return this.http.get<Aluno>(`${API_CONFIG.baseUrl}/alunos/`);
    }

    
}