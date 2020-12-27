package se.mosverkstad.mosjava.gaPilot.gaData;

import java.util.LinkedList;
import java.util.List;

import se.mosverkstad.mosjava.gaPilot.gaConfig.GaConfig;
import se.mosverkstad.mosjava.gaPilot.gaControl.GaFactory;

public class GaChromosome {
	private List<GaGeneProcessor> genes;
	private GaChromosomeProcessor processor;
	private GaConfig<?> config;
	
	private Integer score = 0;
	
	public GaChromosome() {
		this.genes = new LinkedList<GaGeneProcessor>();
		this.processor = GaFactory.chromosomeProcessor;
		this.config = GaFactory.config;
	}
	
	public void createGenes() throws InstantiationException, IllegalAccessException, ClassNotFoundException {
		for (int i = 0; i < this.config.getChromosomeSize(); i++) {
			((LinkedList<GaGeneProcessor>) this.genes).addLast(GaFactory.createGeneProcessor());
		}
	}
	
	public void initializeGenes() {
		this.genes.stream().forEach(gene -> gene.initialize());
	}
	
	public void cloneGene(int index, GaGeneProcessor gene) {
		this.genes.get(index).clone(gene);
	}
	public List<GaGeneProcessor> get() {
		return this.genes;
	}
	
	public void set(List<GaGeneProcessor> genes) {
		this.genes = genes;
	}
	
	public void calculateScore() {
		this.score = this.processor.calculateScore(this.config, this.genes);
	}
	
	public Integer getScore() {
		return this.score;
	}
	
	@Override
	public String toString() {
		return this.processor.generateDescription(this.genes, this.score);
	}
}
