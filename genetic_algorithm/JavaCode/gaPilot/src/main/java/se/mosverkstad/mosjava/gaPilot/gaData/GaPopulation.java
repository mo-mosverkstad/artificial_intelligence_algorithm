package se.mosverkstad.mosjava.gaPilot.gaData;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

import se.mosverkstad.mosjava.gaPilot.gaConfig.GaConfig;
import se.mosverkstad.mosjava.gaPilot.gaControl.GaFactory;

public class GaPopulation {
	private List<GaChromosome> chromosomes;
	private GaPopulationProcessor processor;
	private GaConfig<?> config;
	private Integer populationSize;
	
	public GaPopulation() {
		this.chromosomes = new LinkedList<GaChromosome>();
		this.processor = GaFactory.populationProcessor;
		this.config = GaFactory.config;
		this.populationSize = tunePopulationSize(this.config.getPopulationSize());
	}
	
	private Integer tunePopulationSize(Integer populationSize) {
		if (populationSize % 2 == 1) {
			return populationSize + 1;
		}
		return populationSize;
	}
	
	public void initialize() throws InstantiationException, IllegalAccessException, ClassNotFoundException {
		for (int i = 0; i < this.populationSize; i++) {
			((LinkedList<GaChromosome>) this.chromosomes).addLast(GaFactory.createInitializeChromosome());
		}
	}
	
	public void calculateSortScore() {
		this.chromosomes.stream().forEach(ch -> ch.calculateScore());
		this.chromosomes = this.chromosomes.stream()
				.sorted((ch1, ch2)-> ch1.getScore().compareTo(ch2.getScore()))
				.collect(Collectors.toList());
	}
	
	public List<GaChromosome> get() {
		return this.chromosomes;
	}
	
	public void set(List<GaChromosome> chromosomes) {
		this.chromosomes = chromosomes;
	}
	
	@Override
	public String toString() {
		return this.processor.generateDescription(this.chromosomes);
	}
}
