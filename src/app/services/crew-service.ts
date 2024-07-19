import { Injectable } from '@angular/core';
import { of } from 'rxjs';

// DI için
@Injectable({
  providedIn: 'root', // tüm componentlerden erişilebilir
})
export class CrewService {
  crews = [
    {
      id: 1,
      name: 'Ali',
      surname: 'TAN',
      age: 21,
    },
    {
      id: 2,
      name: 'Ahmet',
      surname: 'Can',
      age: 34,
    },
    {
      id: 3,
      name: 'Veysel',
      surname: 'Ören',
      age: 26,
    },
  ];

  getAll() {
    return of(this.crews);
  }

  getById(id: number) {
    var crew = this.crews.find((x) => x.id == id);
    console.log('crew', crew);
    return of(crew);
  }

  deleteById(id: number) {
    var crews = this.crews.filter((x) => x.id != id);

    return of(crews);
  }
}
