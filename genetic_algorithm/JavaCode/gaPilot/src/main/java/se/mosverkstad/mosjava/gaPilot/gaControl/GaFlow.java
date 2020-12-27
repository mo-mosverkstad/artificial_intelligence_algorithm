package se.mosverkstad.mosjava.gaPilot.gaControl;

import se.mosverkstad.mosjava.gaPilot.gaData.GaPopulation;
import se.mosverkstad.mosjava.gaPilot.generalHelpers.RandomGenerator;

public class GaFlow {
	// callback functions
	private GaFlowFitness fitness;
	private GaFlowMate mate;
	// GA data: population with chromosome and gene
	private GaPopulation population;
	
	public void loadAlgorithm(GaFlowFitness fitness, GaFlowMate mate) {
		this.fitness = fitness;
		this.mate = mate;
	}
	
	public void loadData(GaPopulation population) {
		this.population = population;
	}
	
	public int evolve() {
		int generationCount = 0;
		this.population.calculateSortScore();
		while ( !this.fitness.fit(this.population) && (generationCount < GaFactory.config.getGenerationMax())) {
			this.mate.select(this.population);
			this.mate.crossover(this.population);
			if (RandomGenerator.generateDouble(0, 1) < GaFactory.config.getMutationRateInGeneration()) {
				this.mate.mutate(this.population);
			}
			this.population.calculateSortScore();
			GaPeek.peekInGeneration(generationCount, this.population);
			generationCount++;
		}
		return generationCount;
	}
	
	public String toString() {
		return String.format("Population: %s\n", this.population);
	}
}
