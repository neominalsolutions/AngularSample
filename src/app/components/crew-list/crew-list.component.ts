import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { CrewService } from '../../services/crew-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './crew-list.component.html',
  styleUrl: './crew-list.component.css',
})
export class CrewListComponent implements OnInit {
  // Angular servislere bağkanırken DI yapıyor.

  crews: any[] = [];

  constructor(private router: Router, private crewService: CrewService) {}

  ngOnInit(): void {
    // servislerden gelen verilen çekileceği yer burası;
    this.crewService.getAll().subscribe((response) => {
      this.crews = response;
    });
    console.log('ilk sayfa açıldığında burası tetiklenir');
    // Form load
  }

  detay(id: number) {
    this.router.navigate(['crew', id]); // crew/1
  }

  duzenle(id: number) {
    var bulunan = this.crews.find((x) => x.id == id);

    var guncelİsim = prompt('Guncel İsim', bulunan.name);
    var guncelSoyad = prompt('Guncel Soyad', bulunan.surname);
    var guncelYas = prompt('Guncel Yaş', bulunan.age);

    // ekran da veri güncellemesi
    this.crews = this.crews.map((crew) => {
      if (crew.id == id) {
        // bulunanın güncel halini döndür.
        // item değişti.
        return {
          id: id,
          name: guncelİsim,
          surname: guncelSoyad,
          age: guncelYas,
        };
      } else {
        // id olmayanları olduğu gibi döndür
        return crew;
      }
    });
  }

  sil(id: number) {
    var ok = confirm('silmek istediğine emin misin');

    if (ok) {
      this.crewService.deleteById(id).subscribe((response) => {
        this.crews = response;
      });
    }
  }
}
