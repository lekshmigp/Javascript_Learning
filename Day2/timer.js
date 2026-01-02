// timer scenarios mostly used in exam timer,online test platforms
const timer={
    second:0,
    start (){
        setInterval( ()=>{// setTimeout-- for once , setInterval shows continuity
            this.second++;
            console.log(this.second);
    }, 5000);
    }
};
timer.start();