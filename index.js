// All DOM Event Listeners
const body=$("#body");
const blueTheme=$(".blue-theme"); 
const whiteTheme=$(".white-theme"); 
const purpleTheme=$(".purple-theme");
const screen = $(".screen");
const keypad=$(".keys-wrapper");
const keys=$(".button");
const toggleBtn=$(".switch-toggle");
const deleteBtn=$(".delete")
const resetBtn=$(".reset");
const submitBtn=$(".submit");


// Show Input from keypad
const showInput = (value)=>{
    screen.val(screen.val() + value);

};
    
// Evaluate the calculation
const equal = ()=>{
    screen.val(eval(screen.val()));

};

// Delete last digit 
const del = () =>{
    if(screen.val() =="") return;
    
    const itemToDelete=screen.val().slice(0,-1);
    screen.val(itemToDelete);
};

// Reset Screen Value
const reset=()=>{
    screen.val() ="";
};

// Blue Theme
blueTheme.click(()=>{
    screen.removeClass("white-input");
    screen.removeClass("purple-input");
    body.removeClass("white-body");
    body.removeClass("purple-body");
    keys.removeClass("white-button");
    keys.removeClass("purple-button");
    keypad.css("background-color","hsl(223, 31%, 20%)");
    toggleBtn.css("background-color","hsl(223, 31%, 20%)");
    deleteBtn.removeClass("white-delete");
    deleteBtn.removeClass("purple-delete");
    resetBtn.removeClass("white-reset");
    resetBtn.removeClass("purple-reset");
    submitBtn.removeClass("white-submit");
    submitBtn.removeClass("purple-submit");

    blueTheme.css("opacity","1");
    whiteTheme.css("opacity","0");
    purpleTheme.css("opacity","0");
})


// White Theme
whiteTheme.click(()=> {
    console.log("c");
    screen.removeClass("purple-input");
    screen.addClass("white-input");
    body.addClass("white-body");
    body.removeClass("purple-body");
    keys.removeClass("purple-button");
    keys.addClass("white-button");
    keypad.css("background-color","hsl(0, 5%, 81%)");
    toggleBtn.css("background-color","hsl(0, 5%, 81%)");
    deleteBtn.removeClass("purple-delete");
    deleteBtn.addClass("white-delete");
    resetBtn.removeClass("purple-reset");
    resetBtn.addClass("white-reset");
    submitBtn.addClass("white-submit");
    submitBtn.removeClass("purple-submit");

    blueTheme.css("opacity","0");
    whiteTheme.css("opacity","1");
    purpleTheme.css("opacity","0");
});


// Purple Theme
purpleTheme.click(()=> {
    console.log("c");
    screen.removeClass("white-input");
    screen.addClass("purple-input");
    body.addClass("purple-body");
    body.removeClass("white-body");
    keys.addClass("purple-button");
    keys.removeClass("white-button");
    keypad.css("background-color","hsl(268, 71%, 12%)");
    toggleBtn.css("background-color","hsl(268, 71%, 12%)");
    deleteBtn.removeClass("white-delete");
    deleteBtn.addClass("purple-delete");
    resetBtn.removeClass("white-reset");
    resetBtn.addClass("purple-reset");
    submitBtn.addClass("purple-submit");
    submitBtn.removeClass("white-submit");

    blueTheme.css("opacity","0");
    whiteTheme.css("opacity","0");
    purpleTheme.css("opacity","1");
});
