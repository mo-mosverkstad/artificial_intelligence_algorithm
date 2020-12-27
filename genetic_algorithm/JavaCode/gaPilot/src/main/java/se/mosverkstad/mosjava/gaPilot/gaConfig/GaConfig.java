package se.mosverkstad.mosjava.gaPilot.gaConfig;

public interface GaConfig <T> {
	T getTarget();
	Integer getPopulationSize();
	Integer getGenerationMax();
	Integer getChromosomeSize();
	Double  getMutationRateInGeneration();
	Double  getMutationRateInPopulation();
	
	String getImplFitness();
	String getImplMate();
}
