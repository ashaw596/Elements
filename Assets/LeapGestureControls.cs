using UnityEngine;
using System.Collections;
using Leap;

public class LeapGestureControls : MonoBehaviour {

	LeapManager myLeapManagerInstance;
	// Use this for initialization
	void Start () {
		myLeapManagerInstance = (GameObject.Find("LeapManager") as GameObject).GetComponent(typeof(LeapManager)) as LeapManager;
		Controller controller = myLeapManagerInstance.leapController;
		controller.EnableGesture (Gesture.GestureType.TYPESWIPE);
		controller.Config.Save();
	}
	
	// Update is called once per frame
	void Update () {
		Frame frame = myLeapManagerInstance.leapController.Frame();
		GestureList gl = frame.Gestures (); 
		//Debug.Log (gl.Count);
		if (gl.Count > 0) {
			Gesture gest = gl[0];
			if (gest.Type == Gesture.GestureType.TYPESWIPE &&
			    gest.State == Gesture.GestureState.STATESTART) {
				SwipeGesture swipe = new SwipeGesture(gest);
				Vector direction = GetSwipeDirection(swipe.Direction);
				Debug.Log (direction);
			}
		}
	}
	Vector GetSwipeDirection(Vector direction) {
		Vector swipeDirection = null;
		if (Mathf.Abs(direction.x) > Mathf.Abs(direction.y)) {
			if (direction.x > 0) {
				swipeDirection = Vector.Right;
			} else {
				swipeDirection = Vector.Left;
			}
		} else {
			if (direction.y > 0) {
				swipeDirection = Vector.Up;
			} else {
				swipeDirection = Vector.Down;
			}
		}
		return swipeDirection;
	}
}
