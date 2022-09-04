const textarea = document.getElementById('textarea');
const longitudMax = textarea.getAttribute('maxlength');
document.getElementById("max").value = longitudMax;

textarea.addEventListener('input', function(e) {
    let longitud = e.target.value.length;
    document.getElementById("cantidad").value = longitud; 
});