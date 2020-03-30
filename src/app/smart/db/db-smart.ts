import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { WebsocketsService } from './websockets.service';
import { SmartConfig } from '../models/smart-config';
import { Inject } from '@angular/core';
import { Observable } from 'rxjs';

export class DBSmart<T> {

    constructor(
        protected http: HttpClient,
        public ws: WebsocketsService,
        @Inject('config') public config: SmartConfig,
        private path: string,
    ) {

    }

    private create(record: T) {
        return this.http.post(this.config.api.url + this.path, record).pipe(take(1));
    }

    private update(record: T) {
        return this.http.put(this.config.api.url + this.path, record).pipe(take(1));
    }

    list(): Observable<T[]>{
        return this.http.get<T[]>(this.config.api.url + this.path).pipe(take(1));
    }

    loadById(id: string): Observable<T> {
        return this.http.get<T>(this.config.api.url + this.path + '/' + id).pipe(take(1));
    }

    save(record: T): Observable<any> {
        return record['_id'] ? this.update(record) : this.create(record);
    }

    remove(id: string): Observable<any>{
        return this.http.delete(this.config.api.url + this.path + '/' + id).pipe(take(1));
    }

    snapshotChanges(): Observable<T[]> {

        let socket = this.ws.getSocket();

        return new Observable<T[]>(observer => {

            this.list()
                .pipe(take(1))
                .subscribe(docs => {
                    observer.next(docs);
                });

            socket.on(this.path + ':changes', (changes) => {
                console.log('CHANGES', changes);
                this.list()
                    .pipe(take(1))
                    .subscribe(docs => {
                        observer.next(docs);
                    });
            });

        });

    }

    snapshotChangesById(id): Observable<T> {

        let socket = this.ws.getSocket();

        return new Observable<T>(observer => {

            this.loadById(id)
                .pipe(take(1))
                .subscribe(doc => {
                    observer.next(doc);
                });

            socket.on(this.path + ':changes', (changes) => {
                this.loadById(id)
                    .pipe(take(1))
                    .subscribe(doc => {
                        observer.next(doc);
                    });
            });

        });

    }

    disconnect(){
        this.ws.disconnect();
    }

}