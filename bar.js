window.onload = () => {
    var bar = document.createElement('div');
    document.body.appendChild(bar);
    bar.style.cssText = "width: 100%; font-family: sans-serif; position: fixed; bottom: 0; left: 0; background-color: rgba(0,0,0,.5); color: #fff; line-height: 40px; font-size: 13px; text-align: right;";
    bar.id = 'bar';
    if(barConfig.gitUri){
        bar.innerHTML = '<a href="'+ barConfig.gitUri +'" style="color: #fff; text-decoration: none; margin-right: 20px;">Github</a>';
    }
}
