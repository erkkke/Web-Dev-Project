import { Component, OnInit, TemplateRef } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {AlbumsService} from '../albums.service';
import {Album, Photo} from '../models';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos!: Photo[];
  thisPhoto!: Photo;
  thisAlbum!: Album;
  albumId!: number;
  photoId!: number;
  id!: number;
  modalRef!: BsModalRef;
  constructor(private route: ActivatedRoute,
              private location: Location,
              private albumsService: AlbumsService,
              private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getPhotos();
  }
  getPhotos(): void {
    // @ts-ignore
    this.route.paramMap.subscribe((x) => this.id = +x.get('id'));
    this.albumsService.getPhotos(this.id).subscribe((photos) => {
      this.photos = photos;
    });
  }
  getPhoto(): void{
    // @ts-ignore
    this.route.paramMap.subscribe((x) => this.photoId = +x.get('id'));
    // @ts-ignore
    this.route.paramMap.subscribe((x) => this.albumId = +x.get('albumId'));
    this.albumsService.getPhoto(this.albumId, this.photoId).subscribe((photo) => {
      this.thisPhoto = photo;
    });
  }

  public openModal(template: TemplateRef<any>): void{
    this.getPhoto();
    this.modalRef = this.modalService.show(template);
  }
}
