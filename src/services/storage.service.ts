import { Injectable } from "@angular/core";
import { STORAGE } from "../config/storage.config";
import { LocalUser } from "../models/localuser";

@Injectable()
export class StorageService {

    get() : LocalUser {
        let usr = localStorage.getItem(STORAGE.localUser);
        if (usr == null) {
            return null;
        }
        else {
            return JSON.parse(usr);
        }
    }

    set(obj : LocalUser) {
        if (obj == null) {
            localStorage.removeItem(STORAGE.localUser);
        }
        else {
            localStorage.setItem(STORAGE.localUser, JSON.stringify(obj));
        }
    }
}