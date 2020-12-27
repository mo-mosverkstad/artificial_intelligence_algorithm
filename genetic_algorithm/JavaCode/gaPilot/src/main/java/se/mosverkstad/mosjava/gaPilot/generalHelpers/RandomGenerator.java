package se.mosverkstad.mosjava.gaPilot.generalHelpers;

import java.util.Random;

public class RandomGenerator {
	private static final Random random = new Random();
	
	public static int generateAscii() {
		return random.nextInt(256);
	}
	
	public static int generateBit() {
		return Math.abs(random.nextInt() % 2);
	}
	
	public static int generateInt(int min, int max) {
		return random.nextInt(max - min + 1) + min;
	}
	
	public static double generateDouble(double min, double max) {
		return random.nextDouble() * (max - min) + min;
	}
}
