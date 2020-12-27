package se.mosverkstad.mosjava.gaPilot.appDecomposePrimes;

import se.mosverkstad.mosjava.gaPilot.gaData.GaGeneProcessor;
import se.mosverkstad.mosjava.gaPilot.generalHelpers.RandomGenerator;

public class Gene implements GaGeneProcessor {
	private int value;
	
	public Gene() {
		this.value = 0;
	}

	@Override
	public GaGeneProcessor initialize() {
		this.value = RandomGenerator.generateBit();
		return this;
	}

	@Override
	public GaGeneProcessor clone(GaGeneProcessor gene) {
		this.value = ((Gene) gene).getValue();
		return this;	
	}

	@Override
	public GaGeneProcessor mutate() {
		this.value = (this.value + 1) % 2;
		return this;
	}

	public int getValue() {
		return this.value;
	}

	@Override
	public String toString() {
		return String.valueOf(this.value);
	}
}
