

/*import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Auth, getAuth, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    [x: string]: any;
    private auth: Auth;
    token!: string;

    constructor(private router: Router, private cookies: CookieService) {
        this.auth = getAuth();
    }

    login(email: string, password: string) {
        signInWithEmailAndPassword(this.auth, email, password)
        .then(
            response => {
                this.auth.currentUser?.getIdToken()
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

    googleLogin() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(this.auth, provider)
        .then(
            result => {
                result.user?.getIdToken().then(token => {
                    this.token = token;
                    this.cookies.set('token', this.token);
                    this.router.navigate(['/home']); // Redirigir al home
                });
            },
            error => {
                console.log('Error en el inicio de sesión con Google:', error);
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
}*/


import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Auth, getAuth, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, User } from "firebase/auth";
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

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
                this.auth.currentUser?.getIdToken()
                .then(token => {
                    this.token = token;
                    this.cookies.set('token', this.token);
                    this.router.navigate(['/home']); // Redirigir al home
                });
            },
            error => {
                console.log(error);
            }
        );
    }

    googleLogin() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(this.auth, provider)
        .then(
            result => {
                result.user?.getIdToken().then(token => {
                    this.token = token;
                    this.cookies.set('token', this.token);
                    this.router.navigate(['/home']); // Redirigir al home
                });
            },
            error => {
                console.log('Error en el inicio de sesión con Google:', error);
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

    getAuthState(): Observable<User | null> {
        return new Observable(observer => {
            onAuthStateChanged(this.auth, (user) => {
                observer.next(user);
            });
        });
    }
}


