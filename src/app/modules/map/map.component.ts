import { Component } from '@angular/core';

@Component({
  selector: 'app-er',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  constructor() { };

  getAgent() {
    let list: any[] = [];
    let listMap: any[] = [];
    fetch('https://valorant-api.com/v1/maps')
      .then(response => response.json())
      .then((data) => {
        list = data.data;
        listMap = list.map((map) => {
          listMap.push([map.displayName, map.listViewIcon]);
        });
      }
      );
      return listMap;
  }
  listMaps = this.getAgent();
}
