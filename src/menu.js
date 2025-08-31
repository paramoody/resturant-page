export default ()=>{
   let content = document.querySelector('.content');

let menu = document.createElement('div');
menu.classList.add('menu');
content.innerHTML = '';
content.appendChild(menu);


menu.textContent = `Sandwich Menu
(Includes House Chips & Cookies or Brownies)

PLEASE CHOOSE THREE SANDWICHES:
(Served Plattered)

Grilled Organic Chicken Salad on Butter Croissant
Walnuts, Grapes, Red Onions & Fresh Herbs

Oven Roasted Beef & Tillamook Cheddar
Sweet Dried Walla Walla Onions, Beef Steak Tomatoes & Horseradish Aioli

Caprese Salad on Demi Baguette
Buffalo Mozzarella, Vine Ripened Tomatoes, Hass Avocadoes & Sweet Basil
Balsamic Mayo

Oven Roasted Cajon Turkey Breast with Gruyere
Field Greens, Vine Ripened Tomatoes, Sliced Red Onions & Dijon Aioli

Italian Grinder
Black Forest Ham, Gypsy Salami, & Provolone
Field Greens, Vine Ripened Tomatoes, Italian Peppers, Walla Walla Onions
Parmesan Focaccia

Grilled Eggplant & Fire Roasted Zucchini Panini
Aged White Cheddar & Pesto Remoulade on Sourdough

Sides
PLEASE CHOOSE TWO:
Italian Penne Pasta Salad
Tear Drop Tomatoes, Sweet Basil, Nicoise Olives, & Feta Cheese

Roasted Fingerling Potato Salad
Asparagus, Sweet Corn, Caramelized Shallots & Smoked Bacon

Watermelon Salad
Fresh Mint, Feta & Honey Balsamic Drizzle

Classic Caesar Salad
Hearts of Romaine, Roasted Pepper Relish, Croutons & Shaved Parmesan

Chilled Baby Green Bean Salad
Roasted Garlic & Crushed Roma Tomatoes

`
}