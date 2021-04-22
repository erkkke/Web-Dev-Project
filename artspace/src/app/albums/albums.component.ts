import {Component, OnInit, TemplateRef} from '@angular/core';
import {Album, Photo} from '../models';
import {ActivatedRoute} from '@angular/router';
import {AlbumsService} from '../albums.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums!: Album[];
  album!: Album;
  albumId!: number;
  photos!: Photo[];
  loaded!: boolean;
  newAlbum: number;
  modalRef!: BsModalRef;

  constructor(private albumsService: AlbumsService, private route: ActivatedRoute, private modalService: BsModalService) {
    // @ts-ignore
    this.newAlbum = null;
  }

  ngOnInit(): void {
    this.getAlbums();
    this.getPhotos();
  }
  getAlbums(): void {
    this.loaded = false;
    this.albumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
      this.album = albums[0];
    });
  }
  getPhotos(): void {
    // this.albumsService.getPhotos().subscribe((photos: ) => {
    //   this.photos = photos;
    // });
    // @ts-ignore
    this.route.paramMap.subscribe((x) => this.albumId = +x.get('id'));
    this.albumsService.getPhotos(this.albumId).subscribe((photos) => {
      this.photos = photos;
    });
  }
  deleteAlbum(id: number): void {
    this.albums = this.albums.filter((x) => x.id !== id);
    this.albumsService.deleteAlbum(id).subscribe(() => {
      console.log('deleted', id);
    });
  }
  // tslint:disable-next-line:typedef
  addAlbum() {
    this.loaded = false;
    const album = {title: this.newAlbum};
    // @ts-ignore
    // tslint:disable-next-line:no-shadowed-variable
    this.albumsService.addAlbum(album as Album).subscribe((album) => {
      this.albums.unshift(album);
      this.loaded = true;
    });
    this.modalRef.hide();
  }

  public openModal(template: TemplateRef<any>): void{
    this.modalRef = this.modalService.show(template);
  }

}

