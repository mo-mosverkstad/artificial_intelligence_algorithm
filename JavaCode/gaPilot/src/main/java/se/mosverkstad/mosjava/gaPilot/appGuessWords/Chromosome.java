package se.mosverkstad.mosjava.gaPilot.appGuessWords;

import java.util.List;
import java.util.stream.Collectors;

import se.mosverkstad.mosjava.gaPilot.gaConfig.GaConfig;
import se.mosverkstad.mosjava.gaPilot.gaData.GaChromosomeProcessor;
import se.mosverkstad.mosjava.gaPilot.gaData.GaGeneProcessor;
import se.mosverkstad.mosjava.gaPilot.generalHelpers.Expression;

public class Chromosome implements GaChromosomeProcessor {

	@Override
	public Integer calculateScore(GaConfig<?> config, List<GaGeneProcessor> genes) {
		Integer score = 0;
		String target = (String)config.getTarget();
		for (int i = 0; i < target.length(); i++) {
			score += Math.abs(((int) target.charAt(i)) - ((Gene)genes.get(i)).getValue());
		}
		return score;
	}
	
	@Override
	public String generateDescription(List<GaGeneProcessor> genes, Integer score) {
		return genes.stream()
				.map(gene -> gene.toString())
				.collect(Collectors.joining(""))
				+ Expression.COLON + score;
	}

}
