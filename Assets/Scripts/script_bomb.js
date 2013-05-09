#pragma strict

private var global : script_global;
private var body : Transform;
private var trail : Transform;

private var angle : int;
private var vectorAngle : Vector3;

function Awake() {
    global = GameObject.Find('Global').GetComponent(script_global); 
    body = transform.Find('Body');
    trail = transform.Find('Trail');

	angle = Random.Range(1, 360);
	transform.eulerAngles = Vector3(0, 0, angle);

    SetColor(global.colorBombBody, global.colorBombTrail);
}

function Update () {
    // var wayPoint = (player.position - transform.position).normalized;
    rigidbody.velocity = transform.right * 20;

}

function OnTriggerEnter (other : Collider) {
	if (other.gameObject.transform.parent.gameObject.transform.parent.gameObject.name == 'Enemy')
	    Destroy(other.gameObject.transform.parent.gameObject.transform.parent.gameObject);
}

function SetColor(bodyColor : Color, trailColor : Color) {
    body.Find('Sphere').renderer.material.color = bodyColor;
    body.Find('Capsule').renderer.material.color = bodyColor;
    trail.renderer.material.color = trailColor;
}
