var item = /** @class */ (function () {
    function item(itemid, itemname, itemprice, category) {
        var _this = this;
        this.display = function () {
            return _this.itemId + " " + _this.itemName + " " + _this.itemPrice + " " + _this.category;
        };
        this.itemId = itemid;
        this.itemName = itemname;
        this.itemPrice = itemprice;
        this.category = category;
    }
    return item;
}());
var o = new item(1, "Mobile", 12999, "Gadgets");
console.log(o.display());
