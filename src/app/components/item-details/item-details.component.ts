import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-details.component.html',
})
export class ItemDetailsComponent implements OnInit {
  itemId!: number;
  details: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    // Subscribe to route parameters to get the item id
    this.route.params.subscribe(params => {
      this.itemId = +params['id'];
      // Fetch details from the API using the DataService
      this.dataService.getItemDetails(this.itemId).subscribe({
        next: (data) => {
          this.details = data;
        },
        error: (err) => {
          console.error('Error fetching item details:', err);
        }
      });
    });
  }
}
