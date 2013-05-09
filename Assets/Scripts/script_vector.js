#pragma strict


private var speed : float = 0.0;
private var speedInc : float;
private var maxSpeed : float;

private var player : Transform;

function Awake()
{
    player = GameObject.Find('Player').transform; 

    transform.position = Vector3(Random.Range(-30.0, 30.0), Random.Range(-18.0, 18.0), 0);
    while (Vector3.Distance(player.position, transform.position) < 10)
        transform.position = Vector3(Random.Range(-30.0, 30.0), Random.Range(-18.0, 18.0), 0);

    speed = 15;
    speedInc = 0.01;
    maxSpeed = 15.0;
}

function Update() {
    if (speed < maxSpeed)
        speed += speedInc;
}

function FixedUpdate() {
    var angle = Mathf.Atan2(player.position.y - transform.position.y, player.position.x - transform.position.x) * Mathf.Rad2Deg;
    transform.eulerAngles = Vector3(0, 0, angle);
    var wayPoint = (player.position - transform.position).normalized;
    rigidbody.velocity = wayPoint * speed;
}

