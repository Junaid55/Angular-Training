class item
{
    itemId:number;
    itemName:string;
    itemPrice:number;
    category:string;

    constructor(itemid:number,itemname:string,itemprice:number,category:string)
    {
        this.itemId=itemid;
        this.itemName=itemname;
        this.itemPrice=itemprice;
        this.category=category;
    }

    display=()=>{
        return this.itemId+" "+this.itemName+" "+this.itemPrice+" "+this.category;
    }
   
}
 let o=new item(1,"Mobile",12999,"Gadgets");
 console.log(o.display());