package se.mosverkstad.mosjava.gaPilot.gaData;

import java.util.List;

import se.mosverkstad.mosjava.gaPilot.gaConfig.GaConfig;

public interface GaChromosomeProcessor {
	Integer calculateScore(GaConfig<?> config, List<GaGeneProcessor> genes);
	String generateDescription(List<GaGeneProcessor> genes, Integer score);
}
