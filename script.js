console.log("hello world")


const textArea = document.getElementsByClassName('searchText')[0];

// used to change bgcolor of Search Bar when TextArea is on focus.
function changeBackgroundColour(focus) {
    // get element
    const search = document.getElementsByClassName('search')[0]

    focus ? search.classList.add('textAreaActive') : search.classList.remove('textAreaActive');
}