# Steps to reproduce

- Starts at about 500MB
- Clicking the button at the bottom of the page several times makes it increase to well over 1GB. Multiple times and it's over 2GB.
- Stays stuck at a level over 1GB (in some cases at 2GB) even after clicking on the garbage collector button on Chrome.
- When the effect is removed and the `getNewStuff` function is called directly, garbage collection works - however, when not invoked manually memory usage stays at over 1GB easily as well. However, there is still a spike in memory usage reflecting that previous states of `stuff` are not collected right away.
