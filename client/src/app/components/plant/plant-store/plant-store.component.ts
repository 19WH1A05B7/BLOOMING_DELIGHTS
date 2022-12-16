// Decorators and Lifehooks
import { Component, OnInit, OnDestroy } from '@angular/core';

// Router
import { ActivatedRoute } from '@angular/router';

// RXJS
import { Subscription } from 'rxjs';

// Services
import { HelperService } from '../../../core/services/helper.service';
import { PlantService } from '../../../core/services/plant.service';

// Models
import { Plant } from '../../../core/models/plant.model';

@Component({
  selector: 'app-plant-store',
  templateUrl: './plant-store.component.html',
  styleUrls: ['./plant-store.component.css']
})
export class PlantStoreComponent implements OnInit, OnDestroy {
  currentQuery: string;
  pageSize = 10;
  currentPage = 1;
  total = 30;
  maxPages = 8;
  querySub$: Subscription;
  routeChangeSub$: Subscription;
  plants: Plant[];

  constructor(
    private route: ActivatedRoute,
    private plantSevice: PlantService,
    private helperService: HelperService
  ) { }

  ngOnInit(): void {
    this.routeChangeSub$ = this.route.params.subscribe((params) => {
      this.currentQuery = params.query;
      this.initRequest(this.currentQuery);
    });

    this.querySub$ = this.helperService
      .searchQuery
      .subscribe(() => {
        this.currentPage = 1;
      });
  }

  ngOnDestroy(): void {
    this.routeChangeSub$.unsubscribe();
    this.querySub$.unsubscribe();
  }

  initRequest(query: string): void {
    query = this.generateQuery(query);
    this.plantSevice
      .search(query)
      .subscribe((res) => {
        this.total = res.itemsCount;
        this.plants = res.data;
      });
  }

  generateQuery(query: string): string {
    if (query === 'default') {
      return `?sort={"creationDate":-1}`
        + `&skip=${(this.currentPage - 1) * this.pageSize}`
        + `&limit=${this.pageSize}`;
    }

    return `?query={"searchTerm":"${query}"}`
      + `&sort={"creationDate":-1}`
      + `&skip=${(this.currentPage - 1) * this.pageSize}`
      + `&limit=${this.pageSize}`;
  }

  pageChanged(newPage: number): void {
    this.currentPage = newPage;
    this.initRequest(this.currentQuery);
  }
}
