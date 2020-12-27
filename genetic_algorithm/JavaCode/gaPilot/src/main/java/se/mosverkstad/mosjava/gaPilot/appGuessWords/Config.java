package se.mosverkstad.mosjava.gaPilot.appGuessWords;

import se.mosverkstad.mosjava.gaPilot.gaConfig.GaConfig;

public class Config implements GaConfig <String> {
	private static final String TARGET_STRING = "house2"; //"mo-mosverkstad";
	
	@Override
	public String getTarget() {
		return TARGET_STRING;
	}
	
	@Override
	public Integer getPopulationSize() {
		return 1000;
	}

	@Override
	public Integer getGenerationMax() {
		return 1000;
	}

	@Override
	public Integer getChromosomeSize() {
		return TARGET_STRING.length();
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
