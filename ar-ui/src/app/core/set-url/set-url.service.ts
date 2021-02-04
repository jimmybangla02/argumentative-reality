import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {AppState} from '../store/app.store';

@Injectable({
  providedIn: 'root'
})
export class SetUrlService {

  isLoading = new Subject();

  constructor(
    private database: AngularFireDatabase,
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  getUrl(path: string, key): Observable<any[]> {
    return this.database.list(path, ref => ref
      .orderByChild(key).limitToFirst(1)).snapshotChanges().pipe(
      map(changes => {
        const arr = [];

        changes.forEach((c: any) => {
          const data = c.payload.val();
          data.key = c.payload.key;
          arr.push(data);
        });

        const normalized = arr.reduce((acc, user) => {
          acc[user.key] = user;
          // delete user.key;
          return acc;
        }, {});
        return normalized;
      })
    );
  }

  getKeysDetails(path, key) {
    return this.database.list(path, ref => ref
      .orderByChild(key)).snapshotChanges().pipe(
      map(changes => {
          if (changes.length > 0) {
            const arr = [];
            let obj: any = {};
            changes.forEach(c => {
              obj = (c.payload.val());
              arr.push(obj);
            });
            console.log(arr);
            return arr;
          }
        }
      )
    );
  }

  createDynamicUrl(path, data): Promise<void> {
    return this.database.database.ref(path)
      .push(data)
      .then(() => {
        console.log('successfully create new url');
      })
      .catch(err => {
        console.log(err.code, err.message, 'fail to create new url');
      });
  }

  updateItem(path: string, key: string, value: any): Promise<void> {
    return this.database.list(path).update(key, value);
  }

  deleteItem(path: string, key: string): Promise<void> {
    return this.database.list(path + '/' + key).remove();
  }

  sendMessage(id: string, payload) {
    this.isLoading.next({status: true});
    this.http.post('/api/send-message/', payload).subscribe(message => {
      console.log(message);
      if (message) {
        this.isLoading.next({status: false});
      }
    });
  }
}
