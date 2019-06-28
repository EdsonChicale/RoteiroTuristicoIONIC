import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
    
    this.items.push(
    {
    title: 'Serra da Leba',
    note: 'Huila',
    icon: 'navigate'
    },
    {
      title: 'Miradouro da Cidade',
      note: 'Huila',
      icon: 'navigate'
      } 
    );
    


    

  }

  
  

  

  ngOnInit() {
  }
 //  add back when alpha.4 is out
 //navigate(Miradouro) {
   //  this.navigate(['/list/list.page', JSON.stringify(Miradouro)]);
   
 //  }
}
