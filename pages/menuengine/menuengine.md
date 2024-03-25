# MenuEngine Docs

MenuEngine is a sprite for Scratch that allows you to load a script as a list to create GUI elements, graphics, and other menus.

## Necessities (all versions)

- You must add a semicolon `;` at the end of every line.
- Seperate values using a semicolon and space. e.g. `#template; center;`.
- You should add a `@~closemenu;` at the top of your script if your menu is opened via a different method.

## Assets (all versions)

- The height of graphics should be about 28 pixels, know that graphics will be scaled up by 133%.
- Button heights should be about 28 pixels.
- Labels for switches and sliders should be about 22 pixels tall.
- Names should reflect the actual type the asset is for, e.g. `#template` is the costume and the code is `#template; left;`.

## Graphics (all versions)

You can create graphics by adding `#` at the beginning of a line. e.g. `#template;`.
You can adjust the position using left right or center. e.g. `#template: center;`.
Graphics can be used to display text, images, symbols, or any other elements.

## Buttons (all versions)

You can create buttons by adding `@` at the beginning of a line. e.g. `@template;`.
You must add a second value for whatever event you want to broadcast. e.g. `@template; event;`
The third value is the position of the button, such as left right or center. e.g. `@template; event; center;` would create a centered button that broadcasts "event" when clicked.

## Boolean (all versions)

You can create switches by adding `>` at the beginning of a line. e.g. `>template;`.
This first value is the slot in the <scratchlist>~FOR</scratchlist> list.
It can only be 1 of 2 values, 0 or 1 (a single binary value).
The second value is the position, such as left right or center. e.g. `>template; center;` would create a switch centered within the stage.

## Sliders (>1.13)

Sliders are created by adding a `|` at the beginning of a line. e.g. `|template;`.
Sliders have a minimum and maximum of 0 to 100.
The second value is the slot in the <scratchlist>~FOR</scratchlist> list. e.g. `|template; range;` would make the slider change the range value.
The third value is the position, such as left right or center. e.g. `|template; range; center;`.

## Margin Radius (<v1.11)

Add a margin radius using `!` at the beginning of a line.
This bounds elements to a certain space. e.g. `!; 100;` would space every object within 100 pixels from the center of the stage.
Just know that sprites may overlap beyond the margin. **This feature was removed with the 1.12 beta.**
