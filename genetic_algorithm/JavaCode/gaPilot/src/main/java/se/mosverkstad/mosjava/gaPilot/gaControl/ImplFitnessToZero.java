package se.mosverkstad.mosjava.gaPilot.gaControl;

import se.mosverkstad.mosjava.gaPilot.gaData.GaPopulation;

public class ImplFitnessToZero implements GaFlowFitness {

	@Override
	public boolean fit(GaPopulation population) {
		return population.get().get(0).getScore() == 0;
	}

}
