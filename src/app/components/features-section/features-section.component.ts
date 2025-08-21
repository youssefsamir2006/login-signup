import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { feature } from '../../models/feature.model';
import { FeatureService } from '../../services/feature.service';

@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features-section.component.html',
  styleUrl: './features-section.component.css'
})
export class FeaturesSectionComponent implements OnInit {
  features: feature[] = [];

  constructor(private featureService: FeatureService) {}

  ngOnInit(): void {
    this.featureService.getFeatures().subscribe(features => {
      this.features = features;
    });
  }

  learnMore(feature: feature) {
    alert(`Learn more about ${feature.title}`);
  }
}
