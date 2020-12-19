package se.mosverkstad.mosjava.gaPilot.appLinearEquation;

import se.mosverkstad.mosjava.gaPilot.gaConfig.GaConfig;

public class Config implements GaConfig <LinearEquation> {

	@Override
	public LinearEquation getTarget() {
		return new LinearEquation(17, 3120, -1);
	}

	@Override
	public Integer getPopulationSize() {
		return 100;
	}

	@Override
	public Integer getGenerationMax() {
		return 200;
	}

	@Override
	public Integer getChromosomeSize() {
		return 12;
	}

	@Override
	public Double getMutationRateInGeneration() {
		return 0.1;
	}

	@Override
	public Double getMutationRateInPopulation() {
		return 0.001;
	}

	@Override
	public String getImplFitness() {
		return "ImplFitnessToZero";
	}

	@Override
	public String getImplMate() {
		return "ImplMateBestCandidates";
	}

}
