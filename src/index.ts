const run = ():void => {
    if (!document) return;
    const root = document.getElementById("root");
    if(!root) return;
    root.textContent = "Hello!"
}

run();