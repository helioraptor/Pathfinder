import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Dataset} from "./model/Dataset";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {Reference} from "./model/Reference";
import {Pathway} from "./model/Pathway";

@Injectable()
export class HttpService {

  constructor(private http: Http ) {

  }

  reactomeUrl = 'https://reactome.org/AnalysisService/identifiers/?interactors=false&pageSize=20&page=1&sortBy=ENTITIES_PVALUE&order=ASC&resource=TOTAL';

  public getSearchUrl(searchString: string) {
    return `https://www.omicsdi.org/ws/dataset/search?query=${searchString}&start=0&size=100&faceCount=20`;
  }

  public getReferenceUrl(acc: string, repo: string) {
    return `https://www.omicsdi.org/ws/dataset/${repo}/${acc}.json`;
  }

  public getDatasets(searchString: string): Observable<Dataset[]> {
    return this.http.get(this.getSearchUrl(searchString)).map(
      x => ( x.json().datasets )
    );
  }

  public getMolecules(acc: string, repo: string): Observable<Reference[]> {
    return this.http.get(this.getReferenceUrl(acc, repo)).map(
      x => (x.json().crossReferences)
    );
  }

  public getPathways(identifiers: string): Observable<Pathway[]> {
    return this.http.post(this.reactomeUrl, identifiers).map(
      x => (x.json().pathways)
    );
  }
}
