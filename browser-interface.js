(() => {

    const textarea = document.getElementById("textarea");
    const button = document.getElementById("button");

    button.addEventListener("click", (event) => {
        console.log("hello");

        Ant.compile(textarea.value);
    })

})();