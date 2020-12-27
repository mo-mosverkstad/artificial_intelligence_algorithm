package se.mosverkstad.mosjava.gaPilot.appLinearEquation;

public class LinearEquation {
	private final int a, b, c;
	
	public LinearEquation(int a, int b, int c) {
		this.a = a;
		this.b = b;
		this.c = c;
	}
	
	public int getDifference(int x) {
		return (a * x) % b + c;
	}
}
