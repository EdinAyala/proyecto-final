import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Auth, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private auth: Auth;
    token!: string;

    constructor(private router: Router, private cookies: CookieService) {
        this.auth = getAuth();
    }

    login(email: string, password: string) {
        signInWithEmailAndPassword(this.auth, email, password)
        .then(
            response => {
                this.auth.currentUser ?.getIdToken()
                .then(token => {
                    this.token = token;
                    this.cookies.set('token', this.token);
                    this.router.navigate(['/home']); // Redirigir al listado de películas
                });
            },
            error => {
                console.log(error);
            }
        );
    }

    getIdToken() {
        return this.cookies.get('token');
    }

    estaLogueado() {
        return !!this.cookies.get('token');
    }

    logout() {
        signOut(this.auth).then(() => {
            this.token = "";
            this.cookies.delete('token');
            this.router.navigate(['/login']);
        });
    }
}
