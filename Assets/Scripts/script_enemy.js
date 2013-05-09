#pragma strict

var enemyPrefab : GameObject;

private var speed : float = 0.0;
private var speedInc : float;
private var maxSpeed : float;

private var global : script_global;
private var player : Transform;
private var body : Transform;
private var trail : Transform;

function Awake()
{
    global = GameObject.Find('Global').GetComponent(script_global); 
    player = GameObject.Find('Player').transform; 
    // Screen.showCursor = false;
    body = transform.Find('Body');
    trail = transform.Find('Trail');

    if (Random.value > 0.5f)
        SetColor(global.colorBodyA, global.colorTrailA);
    else
        SetColor(global.colorBodyB, global.colorTrailB);

    transform.position = Vector3(Random.Range(-30.0, 30.0), Random.Range(-18.0, 18.0), 0);
    while (Vector3.Distance(player.position, transform.position) < 10)
        transform.position = Vector3(Random.Range(-30.0, 30.0), Random.Range(-18.0, 18.0), 0);

    speed = Random.Range(0.01, 0.05);
    speedInc = Random.Range(0.001, 0.01);
    maxSpeed = Random.Range(5.0, 15.0);
}

function Update() {
    if (speed < maxSpeed)
        speed += speedInc;
    if (Input.GetKeyDown('space')) {
        Application.LoadLevel('Test'); 
        Time.timeScale = 1.0;
    }
}

function FixedUpdate() {
    var angle = Mathf.Atan2(player.position.y - transform.position.y, player.position.x - transform.position.x) * Mathf.Rad2Deg;
    transform.eulerAngles = Vector3(0, 0, angle);
    var wayPoint = (player.position - transform.position).normalized;
    rigidbody.velocity = wayPoint * speed;
}

function SetColor(bodyColor : Color, trailColor : Color) {
    body.Find('Sphere').renderer.material.color = bodyColor;
    body.Find('Capsule').renderer.material.color = bodyColor;
    trail.renderer.material.color = trailColor;
}

function OnCollisionEnter(collision : Collision) {
    var other = collision.gameObject;
    if (other.name == 'Player') {
            if (other.transform.Find('Body').Find('Sphere').renderer.material.color == body.Find('Sphere').renderer.material.color) {
            Instantiate(gameObject, Vector3.zero, Quaternion.identity);
            Instantiate(gameObject, Vector3.zero, Quaternion.identity);
            Destroy(gameObject);
        } else {
            // Game Over.
            Time.timeScale = 0.0;
        }
    }
}


