import { Component } from '@angular/core';

@Component({
  selector: 'app-er',
  templateUrl: './er.component.html',
  styleUrls: ['./er.component.scss']
})
export class ERComponent {
  constructor() { };

  getAgent() {
    let list: any[] = [];
    let listAgent: any[] = [];
    fetch('https://valorant-api.com/v1/agents')
      .then(response => response.json())
      .then((data) => {
        list = data.data;
        listAgent = list.map((agent) => {
          if(agent.developerName != 'Hunter_NPE'){
            listAgent.push([agent.displayName, agent.developerName, agent.displayIcon, agent.uuid]);
          }
        });
      }
      );
      return listAgent;
  }
  listAgent = this.getAgent();
}
