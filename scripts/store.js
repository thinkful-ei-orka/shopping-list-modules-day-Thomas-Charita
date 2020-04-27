import item from './item.js';
let items = [];
let hideCheckedItems = false;

const findById = function (id) {
    return items.find(item => item.id === id);
}

const addItem = function (name) {
    try {
        item.validateName(name);
        let newitem = item.create(name);
        items.push(newitem);
      } 
      catch (error) {
        console.log(`Cannot add item:${error.message}`);
      }
}

const findAndToggleChecked = function(id) {
    let item = this.findById(id);
    item.checked = !item.checked;
}

const findAndUpdateName = function(id, newName) {
    try{
        item.validateName(newName);
        let itemEdit = this.findById(id);
        itemEdit.name = newName;
    }
    catch (error) {
        console.log(`Cannot add item:${error.message}`);
    }
}

const findAndDelete = function(id) {
    this.items = items.filter(item => item.id !== id);
}

const toggleCheckedFilter = function() {
    this.hideCheckedItems = !hideCheckedItems; 
}




export default {
items,
hideCheckedItems,
addItem,
findById,
findAndToggleChecked,
findAndUpdateName,
findAndDelete,
toggleCheckedFilter
};

