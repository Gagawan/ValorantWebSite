import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {

  getAllthemes() {
    let list: any[] = [];
    let skinthemes: any[] = [];
    let themesUUID: any[] = [];
    fetch('https://valorant-api.com/v1/themes')
      .then(response => response.json())
      .then((data) => {
          list = data.data
          skinthemes = list.map((themes) => {
            if(!skinthemes.includes(themes.displayName)){
              skinthemes.push(themes.displayName); 
              themesUUID.push(themes.uuid)
            }
          });
      });
    return [skinthemes, themesUUID];
  }

  themes = this.getAllthemes()[0];

  getRandomSkin() {
    let skinInfo: any[] = [];
    fetch('https://valorant-api.com/v1/weapons/skins')
      .then(response => response.json())
      .then((data) => {
          let rand = Math.floor(Math.random() * data.data.length);
          skinInfo.push(data.data[rand].displayName, data.data[rand].displayIcon, data.data[rand].themeUuid);
      });
      return skinInfo;
    }

    skin = this.getRandomSkin();

    isTrue(){
      let result = (<HTMLInputElement>document.getElementById("input")).value;
      let list: any[] = [];
      let uuid: string;
      fetch('https://valorant-api.com/v1/themes')
      .then(response => response.json())
      .then((data) => {
        list = data.data
        list.map((theme) => {
          if(theme.displayName == result){
            uuid = theme.uuid
          }
        });
        if(uuid == this.skin[2]){
          console.log("win")
        } else {
          console.log("lose")
        }
      });
    }
  }
