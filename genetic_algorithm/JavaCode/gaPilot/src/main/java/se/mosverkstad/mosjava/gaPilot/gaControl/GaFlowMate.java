package se.mosverkstad.mosjava.gaPilot.gaControl;

import se.mosverkstad.mosjava.gaPilot.gaData.GaPopulation;

public interface GaFlowMate {
	void select(GaPopulation population);
	void crossover(GaPopulation population);
	void mutate(GaPopulation population);
}
