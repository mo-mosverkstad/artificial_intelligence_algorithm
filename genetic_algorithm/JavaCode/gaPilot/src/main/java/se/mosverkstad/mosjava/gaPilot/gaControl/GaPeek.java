package se.mosverkstad.mosjava.gaPilot.gaControl;

import se.mosverkstad.mosjava.gaPilot.gaData.GaPopulation;

public class GaPeek {
	public static void peekInGeneration(int generationCount, GaPopulation population) {
		System.out.println(String.format("Generation %d: Best Result: %s",
				generationCount,
				population.get().get(0)));
	}
}
