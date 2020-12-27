package se.mosverkstad.mosjava.gaPilot.gaData;

public interface GaGeneProcessor {
	GaGeneProcessor initialize();
	GaGeneProcessor clone(GaGeneProcessor gene);
	GaGeneProcessor mutate();
}
