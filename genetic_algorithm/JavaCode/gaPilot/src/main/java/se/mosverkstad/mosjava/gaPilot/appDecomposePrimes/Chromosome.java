package se.mosverkstad.mosjava.gaPilot.appDecomposePrimes;

import java.util.List;
import java.util.stream.Collectors;

import se.mosverkstad.mosjava.gaPilot.gaConfig.GaConfig;
import se.mosverkstad.mosjava.gaPilot.gaControl.GaFactory;
import se.mosverkstad.mosjava.gaPilot.gaData.GaChromosomeProcessor;
import se.mosverkstad.mosjava.gaPilot.gaData.GaGeneProcessor;
import se.mosverkstad.mosjava.gaPilot.generalHelpers.Expression;
import se.mosverkstad.mosjava.gaPilot.generalHelpers.Prime;

public class Chromosome implements GaChromosomeProcessor {

	private String getChromosomeString(List<GaGeneProcessor> genes) {
		return genes.stream().map(g -> g.toString()).collect(Collectors.joining());
	}
	
	private int[] getPrimes(String chromosomeString) {
		final int mid = chromosomeString.length() / 2;
    	String primeIndex1 = chromosomeString.substring(0, mid);
    	String primeIndex2 = chromosomeString.substring(mid);
    	int prime1 = Prime.get(Integer.parseInt(primeIndex1, 2));
    	int prime2 = Prime.get(Integer.parseInt(primeIndex2, 2));
    	int[] primes={prime1,prime2};
    	return primes;
	}
	
	@Override
	@SuppressWarnings("unchecked")
	public Integer calculateScore(GaConfig<?> config, List<GaGeneProcessor> genes) {
		String chromosomeString = this.getChromosomeString(genes);
		int[] primes = this.getPrimes(chromosomeString); 
    	
		return Math.abs(primes[0] * primes[1]  - ((GaConfig<Integer>)GaFactory.config).getTarget());
	}

	@Override
	public String generateDescription(List<GaGeneProcessor> genes, Integer score) {
		String chromosomeString = this.getChromosomeString(genes);
		int[] primes = this.getPrimes(chromosomeString); 
		return chromosomeString + Expression.COLON + primes[0]
				+ Expression.COLON + primes[1]
				+ Expression.COLON + score;
	}
}
