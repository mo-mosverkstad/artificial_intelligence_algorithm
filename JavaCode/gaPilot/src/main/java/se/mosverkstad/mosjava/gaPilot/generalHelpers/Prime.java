package se.mosverkstad.mosjava.gaPilot.generalHelpers;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.stream.Stream;

public class Prime {
	private static ArrayList<Integer> primes = new ArrayList<Integer>();
	private static final String PRIMES_FILE_NAME = "src/main/resource/Primes.txt";

	public static boolean isPrime(int n) {
		if(n < 2) return false;
		if(n == 2) return true;
		if(n%2==0) return false;
		for(int i = 3; i*i <= n; i += 2)
			if(n%i == 0) return false;
		return true;
	}
	
	public static void printPrimes(int range) {
		for (int i = 2; i <= range; i++) {
			if (isPrime(i)) System.out.println(i);
		}
	}
	
	private static void loadPrimes() {
		try (Stream<String> stream = Files.lines(Paths.get(PRIMES_FILE_NAME))) {
            stream.forEach(line -> Prime.primes.add(Integer.parseInt(line)));
        } catch (IOException e) {
            e.printStackTrace();
        }
	}
	
	public static Integer get(int index) {
		if (Prime.primes.size() == 0) Prime.loadPrimes(); 
		return Prime.primes.get(index);
	}
}
