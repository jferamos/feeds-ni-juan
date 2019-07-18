import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

export class GraphService<T> {
    private api: string = environment.apiUrl;

    constructor(private http:HttpClient, private table: string) {
    }

    async insert(data:T[], returnDef:string) {
        return await this.execute(`
            mutation ($data: [${this.table}_insert_input!]!) {
                insert_${this.table}(objects: $data) {
                    returning ${returnDef}
                }
            }
        `, { data });
    }

    async all(returnDef:string) {
        return await this.execute(`
            {
                ${this.table} ${returnDef}
            }
        `)
    }

    async execute(query: string, variables?: any) {
        const payload = {
            query,
            variables
        }
        return await this.http.post(this.api, JSON.stringify(payload), {
            headers: {
                "content-type": "application/json"
            }
        }).toPromise();
    }

}