/**
 * Created by yuan on 2017/2/20.
 */
function Priority_Queue() {
    var item = [];
    var qelement = function (e,p) {
        this.element = e;
        this.priority = p;
    };
    this.enqueue = function (e,p) {
        var quele = new qelement(e,q);
        if(this.isEmpty()) {
            item.push(quele);
        } else {
            var added = false;
            for(var i=0;i<item.length;i++) {
                if(quele.priority<item[i].priority) {
                    item.splice(i,0,quele);
                    added = true;
                    break;
                }
            }
            if(!added) item.push(quele);
        }
    };
    this.dequeue = function () {
        return item.pop();
    }
//    .....
}
