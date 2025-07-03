import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDarkModeToggle]'
})
export class DarkModeToggle {
  isDark = false;

  @HostBinding('class.dark')
  get isDarkMode() {
    return this.isDark;
  }
  @HostListener('click')
  toggleDarkMode() {
    alert("Dark mode toggled");
    this.isDark = !this.isDark;
    const root = document.documentElement;

    if (this.isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }

}
