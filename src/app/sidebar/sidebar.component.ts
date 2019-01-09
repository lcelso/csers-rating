import { Component, OnInit } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'user', title: 'Cadastros',  icon: 'ti-user', class: '' },
];


// [
//     { path: 'dashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' },
//     { path: 'user', title: 'User Profile',  icon: 'ti-user', class: '' },
//     { path: 'table', title: 'Table List',  icon: 'ti-view-list-alt', class: '' },
//     { path: 'typography', title: 'Typography',  icon: 'ti-text', class: '' },
//     { path: 'icdataUrlons', title: 'Icons',  icon: 'ti-pencil-alt2', class: '' },
//     { path: 'notifications', title: 'Notifications',  icon: 'ti-bell', class: '' },
// ];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];

    imageToShow;

    files;

    file_src;

    dstImg = 'https://via.placeholder.com/100';

    constructor(private domSanitizer: DomSanitizer) {}


    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu(){
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    }

    handleFileInput(file) {
        // console.log(file);
        // console.log(this.transform(file));
        this.imageChange(file);
    }

    imageChange(input) {
        // Loop through each picture file
        this.files = (input.target.files[0]);
        // Create an img element and add the image file data to it
        const img = document.createElement('img');
        img.src = window.URL.createObjectURL(input.target.files[0]);
        // console.log(img.src);
        // console.log(input);

        const reader = new FileReader();

        reader.addEventListener('load', (event: any) => {
            img.src = event.target.result;
            this.imageToShow = event.target.result;
            console.log(event.target.result)

            // Resize the image
            this.resize(img);
          }, false);


        reader.readAsDataURL(input.target.files[0])
      }
      resize (img, MAX_WIDTH: number = 100, MAX_HEIGHT: number = 100) {
        // const canvas = document.createElement('canvas');
        // canvas.width = img.width;
        // canvas.height = img.height;

        // const ctx = canvas.getContext('2d');
        // // ctx.drawImage(img, 0, 0);
        // ctx.drawImage(img, 0, 0, img.width, img.height);


        // console.log(ctx);

        // const imageData = ctx.getImageData(200, 400, 200, 200);

        // console.log(imageData);

        // // create destiantion canvas
        // const canvas1 = document.createElement('canvas');
        // canvas1.width = 100;
        // canvas1.height = 100;

        // const ctx1 = canvas1.getContext('2d');
        // ctx1.rect(0, 0, 100, 100);
        // ctx1.fillStyle = 'white';
        // ctx1.fill();
        // ctx1.putImageData(imageData, 0, 0);

        // // console.log(ctx1);
        // // put data to the img element
        // this.dstImg = canvas1.toDataURL('image/jpeg');

        const canvas = document.createElement('canvas');
        console.log(img);
        console.log(img.width);
        console.log(img.height);

        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(img, 0, 0, width, height);

        this.dstImg = canvas.toDataURL('image/jpeg');
        // return canvas.toDataURL('image/jpeg');
      }

}
