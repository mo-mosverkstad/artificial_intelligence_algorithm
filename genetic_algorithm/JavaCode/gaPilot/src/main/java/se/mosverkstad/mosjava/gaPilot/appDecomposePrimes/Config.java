package se.mosverkstad.mosjava.gaPilot.appDecomposePrimes;

import se.mosverkstad.mosjava.gaPilot.gaConfig.GaConfig;

public class Config implements GaConfig <Integer> {

	@Override
	public Integer getTarget() {
		return 3233;
	}

	@Override
	public Integer getPopulationSize() {
		return 1000;
	}

	@Override
	public Integer getGenerationMax() {
		return 200;
	}

	@Override
	public Integer getChromosomeSize() {
		return 12*2;
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
		//return "ImplMateBestPeer";
		return "ImplMateBestCandidates";
	}

}
