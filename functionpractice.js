

const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}


const uncookedFood = [hamburger, zucchini, chickenBreast, corn, steak]

const cookedFood = []
function grill (raw) {
    for (var i = 0; i < raw.length; i++)  {
    
        raw[i].cooked = true
    cookedFood.push(raw[i]);
}
};
grill(uncookedFood)
console.log(cookedFood);

