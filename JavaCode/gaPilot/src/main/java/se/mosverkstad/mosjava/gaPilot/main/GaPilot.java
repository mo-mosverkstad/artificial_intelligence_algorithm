package se.mosverkstad.mosjava.gaPilot.main;


import se.mosverkstad.mosjava.gaPilot.gaControl.GaFactory;
import se.mosverkstad.mosjava.gaPilot.gaControl.GaFlow;

/**
 * Hello world!
 *
 */
public class GaPilot 
{
    public static void main( String[] args ) throws InstantiationException, IllegalAccessException, ClassNotFoundException {
        runApp("se.mosverkstad.mosjava.gaPilot.appGuessWords");
        //runApp("se.mosverkstad.mosjava.gaPilot.appDecomposePrimes");
    	//runApp("se.mosverkstad.mosjava.gaPilot.appLinearEquation");
    }
    
    public static void runApp(String appPackagePath) throws InstantiationException, IllegalAccessException, ClassNotFoundException {
    	GaFlow flow = GaFactory.generate(appPackagePath);
        System.out.println("Total generation number: " + flow.evolve());
    }
}
