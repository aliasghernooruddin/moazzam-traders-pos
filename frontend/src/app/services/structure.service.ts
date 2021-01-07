import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetResponse } from 'app/models/get-response';
import { PostResponse } from 'app/models/post-response';
import { Structure } from 'app/models/structure';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

const BASE_URL = environment.BASE_URL

@Injectable({
    providedIn: 'root'
})

export class StructureService {

    constructor(private http: HttpClient) { }

    addStructure(data: Structure): Observable<PostResponse> {
        return this.http.post<PostResponse>(BASE_URL + "/add-structure", data)
    }

    getStructure() {
        return this.http.get<GetResponse>(BASE_URL + "/get-structure")
    }

    getStructureDropdown(){
        return this.http.get<GetResponse>(BASE_URL + "/get-structure-dropdown")
    }

}
