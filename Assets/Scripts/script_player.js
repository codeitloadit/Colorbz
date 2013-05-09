#pragma strict

// var bombPrefab : GameObject;

var speed : float;

// private var global : script_global;
// private var body : Transform;
// private var trail : Transform;

function Awake()
{
    // global = GameObject.Find('Global').GetComponent(script_global); 
    // Screen.showCursor = false;
    // body = transform.Find('Body');
    // trail = transform.Find('Trail');

    // SetColor(global.colorBodyA, global.colorTrailA);
}

function Update() {
    // if (Input.GetButtonDown('Fire1') || Input.GetKeyDown('z')) {
    //     SwitchColor();
    // }
    // if (Input.GetButtonDown('Fire2') || Input.GetKeyDown('x')) {
    //     DropBomb();
    // }

}

function FixedUpdate() {
    var mouseRay = Camera.main.ScreenPointToRay(Input.mousePosition).origin;
    var angle = Mathf.Atan2(mouseRay.y - transform.position.y, mouseRay.x - transform.position.x) * Mathf.Rad2Deg;
    transform.eulerAngles = Vector3(0, 0, angle);
    mouseRay -= transform.position;
    mouseRay.z = 0;
    rigidbody.velocity = mouseRay * speed;
}

// function SetColor(bodyColor : Color, trailColor : Color) {
//     // body.Find('Sphere').renderer.material.color = bodyColor;
//     // body.Find('Capsule').renderer.material.color = bodyColor;
//     // trail.renderer.material.color = trailColor;
// }

// function SwitchColor() {
//     // if (body.Find('Sphere').renderer.material.color == global.colorBodyA) {
//     //     SetColor(global.colorBodyB, global.colorTrailB);
//     // } else {
//     //     SetColor(global.colorBodyA, global.colorTrailA);
//     // }
// }

// function DropBomb() {
//     for (var i = 1; i <= 36; i+=1)
//         Instantiate(bombPrefab, transform.position, Quaternion.identity);
// }

