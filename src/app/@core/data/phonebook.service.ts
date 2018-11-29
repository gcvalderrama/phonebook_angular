import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Injectable()

export class PhoneBookService {    
    constructor(private http: HttpClient) {        
        
    }
    getContacts(): Observable<any> {
        return this.http.get("http://www.mocky.io/v2/581335f71000004204abaf83").pipe(
            map( data => {
                return data["contacts"];
            })
        );
    }
}