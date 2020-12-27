package se.mosverkstad.mosjava.gaPilot.appGuessWords;

import java.util.List;
import java.util.stream.Collectors;

import se.mosverkstad.mosjava.gaPilot.gaData.GaChromosome;
import se.mosverkstad.mosjava.gaPilot.gaData.GaPopulationProcessor;
import se.mosverkstad.mosjava.gaPilot.generalHelpers.Expression;

public class Population implements GaPopulationProcessor {

	@Override
	public String generateDescription(List<GaChromosome> chromosomes) {
		return chromosomes.stream()
				.map(chromosome -> chromosome.toString())
				.collect(Collectors.joining())
				+ Expression.NEWLINE;
	}
}
