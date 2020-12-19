package se.mosverkstad.mosjava.gaPilot.appLinearEquation;

import se.mosverkstad.mosjava.gaPilot.gaData.GaGeneProcessor;
import se.mosverkstad.mosjava.gaPilot.generalHelpers.RandomGenerator;

public class Gene implements GaGeneProcessor {
	private int value;

	@Override
	public GaGeneProcessor initialize() {
		this.value = RandomGenerator.generateBit();
		return this;
	}

	@Override
	public GaGeneProcessor clone(GaGeneProcessor gene) {
		this.value = ((Gene) gene).getValue();
		return null;
	}

	public int getValue() {
		return this.value;
	}
	
	@Override
	public GaGeneProcessor mutate() {
		this.value = (this.value + 1) % 2;
		return this;
	}

	@Override
	public String toString() {
		return String.valueOf(this.value);
	}
	
}
