#pragma strict

function OnPreRender() {
    GL.wireframe = true;
}
function OnPostRender() {
    GL.wireframe = false;
}