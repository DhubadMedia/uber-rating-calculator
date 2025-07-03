import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-uber-rating',
  imports: [CommonModule],
  templateUrl: './uber-rating.html',
  styleUrl: './uber-rating.scss'
})
export class UberRating {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('Uber Rating Calculator | Dhubad Media');

    this.metaService.updateTag({
      name: 'Uber driver or rider rating calculator',
      content: 'How to calculate Uber review based on 500 ratings.',
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: 'Uber, Uber Driver, Uber Rating Calc, Uber Rating, How to calculate Uber rating, Uber review calculator, Uber driver rating calculator, Uber rider rating calculator',
    });
  }
  
isDarkMode = false;

    onDarkToggle() {
      this.isDarkMode = !this.isDarkMode;
  }
maxVotes = 500;

stars = [
  { label: 5, count: 496 },
  { label: 4, count: 1 },
  { label: 3, count: 0 },
  { label: 2, count: 0 },
  { label: 1, count: 3 }
];

get totalVotes(): number {
  return this.stars.reduce((sum, s) => sum + s.count, 0);
}

getPercentage(count: number): number {
  return (count / this.maxVotes) * 100;
}

getMaxAllowed(index: number): number {
  return this.maxVotes - (this.totalVotes - this.stars[index].count);
}

onBarClick(event: MouseEvent, index: number): void {
  const element = event.currentTarget as HTMLElement;
  const rect = element.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const percent = clickX / rect.width;

  const maxVotesForThisStar = this.getMaxAllowed(index);
  const newVotes = Math.round(percent * this.maxVotes);

  this.stars[index].count = Math.min(newVotes, maxVotesForThisStar);
}

onInputChange(event: Event, index: number): void {
  const input = event.target as HTMLInputElement;
  let val = parseInt(input.value, 10) || 0;

  const maxAllowed = this.getMaxAllowed(index);
  this.stars[index].count = Math.min(Math.max(val, 0), maxAllowed);
}



getAverageRating(): number {
  const totalScore = this.stars.reduce((sum, star) => sum + (+star.label * star.count), 0);
  const totalCount = this.stars.reduce((sum, star) => sum + star.count, 0);
  return totalCount === 0 ? 0 : +(totalScore / totalCount).toFixed(2); // return like 4.98
}

getRatingLabel(): string {
  const avg = this.getAverageRating();
  return avg >= 4.5 ? 'High Rating' : 'Average';
}

getRatingColorClass(): string {
  const avg = this.getAverageRating();
  return avg >= 4.5 ? 'text-green-500' : 'text-yellow-500';
}

}


