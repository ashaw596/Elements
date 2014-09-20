#pragma strict

internal var animator : Animator;
var isFrozen : boolean;
var isWrongSpell : boolean;
var Health : float;
var UserHealth : int;
var Distance : int;


function Start () {
	isFrozen = false;
	isWrongSpell = false;
	Health = 100.0;
	UserHealth = 20;
	Distance = 40;
	
	animator = GetComponent(Animator);
	
}

function Update () {
	isItFrozen();
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