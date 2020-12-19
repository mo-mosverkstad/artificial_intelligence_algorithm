package se.mosverkstad.mosjava.gaPilot.appLinearEquation;

import java.util.List;
import java.util.stream.Collectors;

import se.mosverkstad.mosjava.gaPilot.gaConfig.GaConfig;
import se.mosverkstad.mosjava.gaPilot.gaControl.GaFactory;
import se.mosverkstad.mosjava.gaPilot.gaData.GaChromosomeProcessor;
import se.mosverkstad.mosjava.gaPilot.gaData.GaGeneProcessor;
import se.mosverkstad.mosjava.gaPilot.generalHelpers.Expression;

public class Chromosome implements GaChromosomeProcessor {

	private String getChromosomeString(List<GaGeneProcessor> genes) {
		return genes.stream().map(g -> g.toString()).collect(Collectors.joining());
	}
	
	private int getValue(String chromosomeString) {
		return Integer.parseInt(chromosomeString, 2);
	}
		
	@Override
	@SuppressWarnings("unchecked")
	public Integer calculateScore(GaConfig<?> config, List<GaGeneProcessor> genes) {
		String chromosomeString = this.getChromosomeString(genes);
		int value = this.getValue(chromosomeString);
		return Math.abs(((GaConfig<LinearEquation>)GaFactory.config).getTarget().getDifference(value));
	}

	@Override
	public String generateDescription(List<GaGeneProcessor> genes, Integer score) {
		String chromosomeString = this.getChromosomeString(genes);
		int value = this.getValue(chromosomeString); 
		return chromosomeString + Expression.COLON + value
				+ Expression.COLON + score;
	}

}
