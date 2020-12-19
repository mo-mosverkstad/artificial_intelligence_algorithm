package se.mosverkstad.mosjava.gaPilot.gaControl;

import se.mosverkstad.mosjava.gaPilot.gaData.GaPopulation;

public interface GaFlowFitness {
	boolean fit(GaPopulation population);
}
