import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss']
})
export class AgentComponent {

  constructor(private route:ActivatedRoute) {}

  id = this.route.snapshot.paramMap.get('id')

  getAgent() {
    let list: any[] = [];
    let listAgent: any[] = [];
    let ability: any[] = [];
    let abilityName: any[] = [];
    fetch(`https://valorant-api.com/v1/agents/` + this.id)
      .then(response => response.json())
      .then((data) => {
        ability.push(
          data.data.abilities[0].displayIcon,
          data.data.abilities[1].displayIcon,
          data.data.abilities[2].displayIcon,
          data.data.abilities[3].displayIcon
          )
          abilityName.push(
            data.data.abilities[0].displayName,
            data.data.abilities[1].displayName,
            data.data.abilities[2].displayName,
            data.data.abilities[3].displayName
          )
        listAgent.push(
          data.data.fullPortrait, 
          data.data.displayName, 
          data.data.background, 
          data.data.description, 
          ability, abilityName, 
          data.data.role.displayName, 
          data.data.role.displayIcon
          )
      }
      );

      fetch(`https://valorant-api.com/v1/agents/` + this.id)
      .then(response => response.json())
      .then((data) => {
        listAgent.push()
      }
      );
      
      console.log(listAgent)
      return listAgent;
  }

  agent = this.getAgent()
  
}
