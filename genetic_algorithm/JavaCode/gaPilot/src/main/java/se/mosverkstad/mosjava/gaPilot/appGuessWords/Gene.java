package se.mosverkstad.mosjava.gaPilot.appGuessWords;

import se.mosverkstad.mosjava.gaPilot.gaData.GaGeneProcessor;
import se.mosverkstad.mosjava.gaPilot.generalHelpers.RandomGenerator;

public class Gene implements GaGeneProcessor {
	public int value;

	public Gene() {
		this.value = 0;
	}
	
	@Override
	public GaGeneProcessor initialize() {
		this.value = RandomGenerator.generateAscii();
		return this;
	}

	@Override
	public GaGeneProcessor clone(GaGeneProcessor gene) {
		this.value = ((Gene) gene).getValue();
		return this;
	}
	
	@Override
	public GaGeneProcessor mutate() {
		this.value = RandomGenerator.generateAscii();
		return this;
	}

	public int getValue() {
		return this.value;
	}

	@Override
	public String toString() {
		return Character.toString((char) this.value);
	}

}
