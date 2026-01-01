/* The sample js code how the post likes get changed 
 1) The code with the primitive values */

let post = 100;

function postViews(p) {
    p++;
    console.log(p);
}

postViews(post);
console.log(post);

//2) The code with reference and values

let postobj= {views:100};
function postViews(p){
    p.views++;
    console.log(p)
}
postViews(postobj)
console.log(postobj.views)


