import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './item-list.component.html',
})
export class ItemListComponent implements OnInit {
  items: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getItems().subscribe({
      next: (data) => this.items = data,
      error: (err) => console.error('Error fetching items:', err)
    });
  }
}
