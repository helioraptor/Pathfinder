import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {Dataset} from "../model/Dataset";
import {Pathway} from "../model/Pathway";

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent implements OnInit {

  constructor(private omicsDIService: HttpService) {

  }

  datasets: Dataset[] = [];
  pathways: {} = {};
  pathways2: Pathway[] = [];
  searchString = 'Kidney Cancer';
  currentPage = 1;

  ngOnInit() {
    // this.search();
  }

  search() {
    this.omicsDIService.getDatasets(this.searchString).subscribe(
      x => {
        this.datasets = x;
        this.getMolecules();
      }
    );
  }

  getMolecules() {
    for (const d of this.datasets) {
      this.omicsDIService.getMolecules(d.id, d.source).subscribe(
        x => {
          console.log('got molecules:' + x.length);
          let identifiers = '';
          for (const r of x) {
            identifiers += (r.dbKey + ',');
          }
          if(identifiers) {
            this.omicsDIService.getPathways(identifiers).subscribe(
              xi => {
                console.log('got pathways:' + xi.length);
                for (const p of xi) {
                  if (null == this.pathways[p.stId]) {
                    this.pathways[p.stId] = {
                      pathway: xi,
                      datasets: [d]
                    };
                    p.datasets = [d];
                    this.pathways2.push(p);
                  }else {
                    this.pathways[p.stId].datasets.push(d);

                    this.pathways2.find(x2 => (x2.stId === p.stId)).datasets.push(d);
                    console.log('adding dataset to:' + p.stId);
                  }
                }
              }
            );
          }
        }
      );
    }

  }

}
