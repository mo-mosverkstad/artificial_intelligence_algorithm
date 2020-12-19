package se.mosverkstad.mosjava.gaPilot.gaControl;

import java.util.OptionalDouble;

import se.mosverkstad.mosjava.gaPilot.gaData.GaPopulation;
import se.mosverkstad.mosjava.gaPilot.generalHelpers.Bucket;

public class ImplFitnessStable implements GaFlowFitness {
	private Bucket<Integer> prevScore = new Bucket<Integer>(10);
	private Double minDifference = 0.001;

	@Override
	public boolean fit(GaPopulation population) {
		Double avgScore = this.getPrevAverage();
		Integer bestScore = population.get().get(0).getScore();
		this.prevScore.add(bestScore);
		return Math.abs((bestScore - avgScore) / avgScore) <= this.minDifference;
	}

	private Double getPrevAverage() {
		OptionalDouble avgScore = prevScore.get().stream().mapToDouble(Integer::intValue).average();
		return avgScore.isPresent() ? avgScore.getAsDouble() : 0; 
	}
}
