const  editorContent=document.getElementById('editor')
const  previewContent=document.getElementById('preview')
// changePreview()
function changePreview()
{
    let editorText=editorContent.value;
    let previewText=marked.parse(editorText);
    previewContent.innerHTML=previewText;
}
editorContent.addEventListener('input', changePreview);