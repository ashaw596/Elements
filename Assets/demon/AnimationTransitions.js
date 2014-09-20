#pragma strict

internal var animator : Animator;
internal var body : CharacterController;
internal var speed: float;
var isFrozen : boolean;
var isWrongSpell : boolean;
var Health : float;
var UserHealth : int;
var Distance : float;
var player: GameObject;
var strength: float;

function Start () {
	isFrozen = false;
	isWrongSpell = false;
	Health = 100.0;
	UserHealth = 20;
	Distance = 40.0;
	strength = 10;
	//player = GameObject.Find("Player");
	animator = GetComponent(Animator);
	body = GetComponent(CharacterController);
	//body.velocity = new Vector3(0,0,0);
	
}

//setTimeout(function reset() {
//	isFrozen = false;
//}, 2000);

function Update () {
	speed = 3;
	isItFrozen();
	Move();

//	reset();
}

function Move() {
	body.SimpleMove(transform.forward*speed);
	var targetRotation = Quaternion.LookRotation (player.transform.position - transform.position);

   var str = Mathf.Min (strength * Time.deltaTime, 1);
   transform.rotation = Quaternion.Lerp (transform.rotation, targetRotation, str);
   transform.rotation = targetRotation;
	
}

function isItFrozen() {
	if (Input.GetKeyDown ("space")) {
		isFrozen = true;
		animator.SetBool("isFrozen", isFrozen);
	} else {
		isFrozen = false;
		animator.SetBool("isFrozen", isFrozen);
	}
}

function roar() {

}
function isDead() {

}
function updateHealth() {

}
function updateDistance() {

}
function attack() {

}