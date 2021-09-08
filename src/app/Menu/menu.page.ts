import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CreateComponent } from '../create/create.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public menu: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private modalController: ModalController) { }

  ngOnInit() {
    this.menu = this.activatedRoute.snapshot.paramMap.get('id');
  }

  async redirectToCreate() {
    const modal = await this.modalController.create({
      component: CreateComponent
    });
    await modal.present();
  }

}
