import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {

  streak = 0;

  getAllSkinNames() {
    let list: any[] = [];
    let skinNames: any[] = [];
    fetch('https://valorant-api.com/v1/weapons/skins')
      .then(response => response.json())
      .then((data) => {
          list = data.data
          skinNames = list.map((skin) => {
            skinNames.push(skin.displayName)
          });
      });
      return skinNames;
  }

  skinList = this.getAllSkinNames();

  getRandomSkin() {
    let skinInfo: any[] = [];
    let test = false;
    fetch('https://valorant-api.com/v1/weapons/skins')
      .then(response => response.json())
      .then((data) => {
          let rand = Math.floor(Math.random() * data.data.length);
          while(
            data.data[rand].displayName == "Random Favorite Skin" || 
            data.data[rand].displayName.includes("Standard") ||
            data.data[rand].displayIcon == null){
              rand = Math.floor(Math.random() * data.data.length);
            }
          skinInfo.push(data.data[rand].displayName, data.data[rand].displayIcon, data.data[rand].themeUuid);
      });
      return skinInfo;
    }

    skin = this.getRandomSkin();

    isTrue(){
      let result = (<HTMLInputElement>document.getElementById("input")).value;
      if(result == this.skin[0]){
        setTimeout(() => (<HTMLInputElement>document.getElementById("result")).innerHTML = "", 2000);
        this.streak++;
        (<HTMLInputElement>document.getElementById("input")).value = "";
        (<HTMLInputElement>document.getElementById("result")).innerHTML = "You win! The skin was " + this.skin[0];
          this.skin = this.getRandomSkin(); 
      } else {
        this.streak = 0;
        (<HTMLInputElement>document.getElementById("input")).value = "";
        (<HTMLInputElement>document.getElementById("result")).innerHTML = "Try again";
      }
    }

    skip(){
      this.streak = 0;
      this.skin = this.getRandomSkin();
      (<HTMLInputElement>document.getElementById("result")).innerHTML = "";
      console.log(this.skin);
    }

  }
