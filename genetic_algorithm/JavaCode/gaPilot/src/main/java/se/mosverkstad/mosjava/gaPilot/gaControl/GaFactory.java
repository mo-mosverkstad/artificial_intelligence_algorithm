package se.mosverkstad.mosjava.gaPilot.gaControl;

import se.mosverkstad.mosjava.gaPilot.gaConfig.GaConfig;
import se.mosverkstad.mosjava.gaPilot.gaData.GaChromosome;
import se.mosverkstad.mosjava.gaPilot.gaData.GaChromosomeProcessor;
import se.mosverkstad.mosjava.gaPilot.gaData.GaGeneProcessor;
import se.mosverkstad.mosjava.gaPilot.gaData.GaPopulation;
import se.mosverkstad.mosjava.gaPilot.gaData.GaPopulationProcessor;

public class GaFactory {
	private static final String PACKAGE_PATH_GACONTROL = "se.mosverkstad.mosjava.gaPilot.gaControl.";
	
	private static final String CLASS_NAME_CONFIG = ".Config";
	private static final String CLASS_NAME_GENE = ".Gene";
	private static final String CLASS_NAME_CHROMOSOME = ".Chromosome";
	private static final String CLASS_NAME_POPULATION = ".Population";
	
	private static String appPackagePath;
	public static GaConfig<?> config;
	public static GaChromosomeProcessor chromosomeProcessor;
	public static GaPopulationProcessor populationProcessor;
	
	public static GaFlow generate (String packagePath) throws InstantiationException, IllegalAccessException, ClassNotFoundException {
		GaFactory.appPackagePath = packagePath;
		GaFactory.config = GaFactory.createConfig();
		GaFactory.chromosomeProcessor = GaFactory.createChromosomeProcessor();
		GaFactory.populationProcessor = GaFactory.createPopulationProcessor();
		
		GaFlow flow = new GaFlow();
		
		GaFlowFitness fitness = (GaFlowFitness) Class.forName(PACKAGE_PATH_GACONTROL + config.getImplFitness()).newInstance();
		GaFlowMate mate = (GaFlowMate) Class.forName(PACKAGE_PATH_GACONTROL + config.getImplMate()).newInstance();
		flow.loadAlgorithm(fitness, mate);
		
		GaPopulation population = GaFactory.createInitializePopulation();
		flow.loadData(population);
		
		return flow;
	}
	
	public static GaConfig<?> createConfig() throws InstantiationException, IllegalAccessException, ClassNotFoundException {
		return (GaConfig<?>) Class.forName(GaFactory.appPackagePath + CLASS_NAME_CONFIG).newInstance();
	}
	
	public static GaGeneProcessor createGeneProcessor() throws InstantiationException, IllegalAccessException, ClassNotFoundException {
		return (GaGeneProcessor) Class.forName(GaFactory.appPackagePath + CLASS_NAME_GENE).newInstance();
	}
	
	public static GaChromosomeProcessor createChromosomeProcessor() throws InstantiationException, IllegalAccessException, ClassNotFoundException {
		return (GaChromosomeProcessor) Class.forName(GaFactory.appPackagePath + CLASS_NAME_CHROMOSOME).newInstance();
	}
	
	public static GaPopulationProcessor createPopulationProcessor() throws InstantiationException, IllegalAccessException, ClassNotFoundException {
		return (GaPopulationProcessor) Class.forName(GaFactory.appPackagePath + CLASS_NAME_POPULATION).newInstance();
	}
	
	public static GaChromosome createChromosome() throws InstantiationException, IllegalAccessException, ClassNotFoundException {
		GaChromosome chromosome = new GaChromosome();
		chromosome.createGenes();
		return chromosome;
	}
	
	public static GaChromosome createInitializeChromosome() throws InstantiationException, IllegalAccessException, ClassNotFoundException {
		GaChromosome chromosome = GaFactory.createChromosome();
		chromosome.initializeGenes();
		return chromosome;
	}
	
	public static GaPopulation createInitializePopulation() throws InstantiationException, IllegalAccessException, ClassNotFoundException {
		GaPopulation population = new GaPopulation();
		population.initialize();
		return population;
	}
}
