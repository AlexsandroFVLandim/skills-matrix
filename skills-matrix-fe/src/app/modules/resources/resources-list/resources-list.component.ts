import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {GetResourcesServiceResponse, Resource} from '../../../models/resource/resource.model';
import {ResourceService} from '../../../services/resource/resource.service';

@Component({
  selector: 'app-resources-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.css']
})
export class ResourcesListComponent implements OnInit {

  resources: Resource[];
  displayedColumns = ['employee_id', 'last_name', 'first_name', 'actions'];

  constructor(private resourceService: ResourceService, private router: Router) { }

  ngOnInit() {
    this.fetchResources();
  }

  fetchResources() {
    this.resourceService.getResources()
      .subscribe( (getResourcesServiceResponse: GetResourcesServiceResponse) => {
        this.resources = getResourcesServiceResponse.data;
        console.log('Data requested ...');
        console.log(this.resources);
      });
  }

  viewResource(id) {
    this.router.navigate([`/resources/${id}`]);
  }

  deleteResource(id) {
    this.resourceService
      .deleteResource(id)
      .subscribe(() => {
        this.fetchResources();
      });
  }

}