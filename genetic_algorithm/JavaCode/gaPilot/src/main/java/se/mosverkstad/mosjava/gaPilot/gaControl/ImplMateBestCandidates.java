package se.mosverkstad.mosjava.gaPilot.gaControl;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

import se.mosverkstad.mosjava.gaPilot.gaData.GaChromosome;
import se.mosverkstad.mosjava.gaPilot.gaData.GaPopulation;
import se.mosverkstad.mosjava.gaPilot.generalHelpers.MultipleIndex;
import se.mosverkstad.mosjava.gaPilot.generalHelpers.RandomGenerator;

public class ImplMateBestCandidates implements GaFlowMate {
	
	@Override
	public void select(GaPopulation population) {
	}

	@Override
	public void crossover(GaPopulation population) {
		List<GaChromosome> prevChromosomes = population.get();
		List<GaChromosome> nextChromosomes = new LinkedList<GaChromosome>();
		
		for (int i = 0, j = 1, len = prevChromosomes.size(); i < len; i = i + 2, j = j + 2) {
			try {
				if (j < len) {
					this.multiply(prevChromosomes, i, j);
				} else {
					this.multiply(prevChromosomes, i);
				}
			} catch (Exception e) {
				
			}
		}
		prevChromosomes = this.sortChromosomes(prevChromosomes);
		for (int i = 0; i < GaFactory.config.getPopulationSize(); i++) {
			nextChromosomes.add(prevChromosomes.get(i));
		}
		population.set(nextChromosomes);
	}

	private void multiply(List<GaChromosome> prevChromosomes, int index1, int index2) throws InstantiationException, IllegalAccessException, ClassNotFoundException {
		GaChromosome parent1 = prevChromosomes.get(index1);
		GaChromosome parent2 = prevChromosomes.get(index2);
		int length = parent1.get().size();
		MultipleIndex index = new MultipleIndex(0, length-1);
		
		GaChromosome child1 = GaFactory.createChromosome();
		GaChromosome child2 = GaFactory.createChromosome();
		for (int i = 0; i < length; i ++) {
			if (i < index.getIndex1() || i >= index.getIndex2()) {
				child1.get().get(i).clone(parent1.get().get(i));
				child2.get().get(i).clone(parent2.get().get(i));
			} else {
				child1.get().get(i).clone(parent2.get().get(i));
				child2.get().get(i).clone(parent1.get().get(i));
			}
		}
		prevChromosomes.add(child1);
		prevChromosomes.add(child2);
	}
	
	private void multiply(List<GaChromosome> prevChromosomes, int index1) throws InstantiationException, IllegalAccessException, ClassNotFoundException {
		GaChromosome parent = prevChromosomes.get(index1);
		int length = parent.get().size();
		
		GaChromosome child = GaFactory.createChromosome();
		for (int i = 0; i < length; i ++) {
			child.get().get(i).clone(parent.get().get(i));
		}
		prevChromosomes.add(child);
	}

	private List<GaChromosome> sortChromosomes(List<GaChromosome> prevChromosomes) {
		return prevChromosomes.stream()
				.sorted((ch1, ch2)-> ch1.getScore().compareTo(ch2.getScore()))
				.collect(Collectors.toList());
		
	}
	
	@Override
	public void mutate(GaPopulation population) {
		Double mutationRate = GaFactory.config.getMutationRateInPopulation();
		population.get().stream().forEach(ch -> {
			if (RandomGenerator.generateDouble(0, 1) < mutationRate) {
				int index = RandomGenerator.generateInt(0, ch.get().size()-1);
				ch.get().get(index).mutate();
			}
		});
	}
}
